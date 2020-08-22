import React from 'react';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons/faArrowsAlt';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';

import { StandardRowCon, IconGroupCon, RowInput, InputWrapper, IconWrapper } from './skins';

const StandardRow = (props) => {
  const { id, hierarchy, content, handleDragStart, handleDragOver, handleOnDrop, handleChangeInput, handleIndent, handleOutdent, handleDelete } = props;

  const getSubTextColor = (hierarchy) => {
    let color = '';
    if (hierarchy === 1) {
      color = '#3cc1c5';
    } else if (hierarchy === 2) {
      color = '#191919';
    }
    return color;
  }

  return (
    <StandardRowCon
      jc="flex-start"
      ai="center"
      draggable
      onDragStart={(e) => handleDragStart(e, id)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => { handleOnDrop(e, id) }}
    >
      <IconGroupCon
        jc="space-evenly"
        ai="center"
      >
        <IconWrapper icon={faArrowsAlt} />
        <IconWrapper
          icon={faArrowLeft}
          onClick={!(hierarchy === 1) ? () => handleIndent(id) : null}
          disabled={hierarchy === 1}
        />
        <IconWrapper
          icon={faArrowRight}
          onClick={!(hierarchy === 4) ? () => handleOutdent(id) : null}
          disabled={hierarchy === 4}
        />
        <IconWrapper icon={faTrash} onClick={() => handleDelete(id)} />
      </IconGroupCon>
      <InputWrapper marLeft={hierarchy * 4} ai="center">
        <RowInput
          placeholder="Start Typing Standards ..."
          value={content}
          type="text"
          onChange={(e) => handleChangeInput(e, id)}
          textClr={getSubTextColor(hierarchy)}
        />
      </InputWrapper>
    </StandardRowCon>
  );
}

export default StandardRow;
