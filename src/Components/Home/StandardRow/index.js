import React from 'react';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons/faArrowsAlt';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';

import { StandardRowCon, IconGroupCon, RowInput, InputWrapper, IconWrapper } from './skins';

const StandardRow = (props) => {

  const handleIndent = (id) => {
    let updateData = [...props.data];
    let index = updateData.findIndex(data => data.id === id);
    if (index > -1) updateData[index].hierarchy = updateData[index].hierarchy - 1;
    props.updateList(updateData);
  }

  const handleOutdent = (id) => {
    let updateData = [...props.data];
    let index = updateData.findIndex(data => data.id === id);
    if (index > -1) updateData[index].hierarchy = updateData[index].hierarchy + 1;
    props.updateList(updateData);
  }

  const handleDelete = (id) => {
    let updateData = [...props.data];
    let index = updateData.findIndex(data => data.id === id);
    if (index > -1) updateData.splice(index, 1);
    props.updateList(updateData)
  }

  const handleChange = (e, id) => {
    let updateData = [...props.data];
    let index = updateData.findIndex(data => data.id === id);
    if (index > -1) updateData[index].content = e.target.value;
    props.updateList(updateData);
  }

  const getSubTextColor = (hierarchy) => {
    let color = '';
    if (hierarchy === 1) {
      color = '#3cc1c5';
    } else if (hierarchy === 2) {
      color = '#191919';
    }
    return color;
  }

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleOnDrop = (e, id) => {
    let updateData = [...props.data];
    const dragItemId = Number(e.dataTransfer.getData("id"));
    const droppingIndex = updateData.findIndex(data => data.id === id);
    const draggedIndex = updateData.findIndex(data => data.id === dragItemId);
    let nextIndex = draggedIndex + 1;
    let elementToBeMoved = [updateData[draggedIndex]]
    while(updateData.length > nextIndex) {
      if(updateData[nextIndex].hierarchy > updateData[draggedIndex].hierarchy) elementToBeMoved.push(updateData[nextIndex])
      else break;
      nextIndex++;
    }
    // remove element
    updateData.splice(draggedIndex, elementToBeMoved.length)
    // add element
    updateData.splice(droppingIndex, 0, ...elementToBeMoved)
    props.updateList(updateData)
  }

  return (
    <StandardRowCon
      jc="flex-start"
      ai="center"
      draggable
      onDragStart={(e) => handleDragStart(e, props.id)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => { handleOnDrop(e, props.id) }}
    >
      <IconGroupCon
        jc="space-evenly"
        ai="center"
      >
        <IconWrapper icon={faArrowsAlt} />
        <IconWrapper
          icon={faArrowLeft}
          onClick={!(props.hierarchy === 1) ? () => handleIndent(props.id) : null}
          disabled={props.hierarchy === 1}
        />
        <IconWrapper
          icon={faArrowRight}
          onClick={!(props.hierarchy === 4) ? () => handleOutdent(props.id) : null}
          disabled={props.hierarchy === 4}
        />
        <IconWrapper icon={faTrash} onClick={() => handleDelete(props.id)} />
      </IconGroupCon>
      <InputWrapper marLeft={props.hierarchy * 4} ai="center">
        <RowInput
          placeholder="Start Typing Standards ..."
          value={props.content}
          type="text"
          onChange={(e) => handleChange(e, props.id)}
          textClr={getSubTextColor(props.hierarchy)}
        />
      </InputWrapper>
    </StandardRowCon>
  );
}

export default StandardRow;
