import React, { useContext } from 'react';

import Header from './Header';
import AddStandard from './AddStandard';
import StandardRow from './StandardRow';
import { HomeCon } from './skins';
import { StandardRowContext } from '../../Context/StandardContext';

const Home = () => {
  const [rowData, setRowdata] = useContext(StandardRowContext);

  const addStandardHandler = () => {
    const updatedData = [...rowData];
    const arrayLength = updatedData.length - 1;
    updatedData.push({
      id: Math.floor(Math.random() * 1000) + 1,
      content: "",
      hierarchy: updatedData[arrayLength].hierarchy,
    });
    setRowdata(updatedData)
  }

  const updateList = (data) => {
    setRowdata(data)
  }

  const onRowIndentHandler = (id) => {
    const updateData = [...rowData];
    const index = updateData.findIndex(data => data.id === id);
    if (index > -1) updateData[index].hierarchy = updateData[index].hierarchy - 1;
    updateList(updateData);
  }

  const onRowOutdentHandler = (id) => {
    const updateData = [...rowData];
    const index = updateData.findIndex(data => data.id === id);
    if (index > -1) updateData[index].hierarchy = updateData[index].hierarchy + 1;
    updateList(updateData);
  }

  const onRowDeleteHandler = (id) => {
    const updateData = [...rowData];
    const index = updateData.findIndex(data => data.id === id);
    if (index > -1) updateData.splice(index, 1);
    updateList(updateData)
  }

  const onChangeRowInputHandler = (e, id) => {
    const updateData = [...rowData];
    const index = updateData.findIndex(data => data.id === id);
    if (index > -1) updateData[index].content = e.target.value;
    updateList(updateData);
  }

  const onDragStartHandler = (e, id) => {
    e.dataTransfer.setData("id", id);
  }

  const onDragOverHandler = (e) => {
    e.preventDefault();
  }

  const onDropHandler = (e, id) => {
    const updateData = [...rowData];
    const dragItemId = Number(e.dataTransfer.getData("id"));
    const droppingIndex = updateData.findIndex(data => data.id === id);
    const draggedIndex = updateData.findIndex(data => data.id === dragItemId);
    let nextIndex = draggedIndex + 1;
    const elementToBeMoved = [updateData[draggedIndex]]
    while(updateData.length > nextIndex) {
      if(updateData[nextIndex].hierarchy > updateData[draggedIndex].hierarchy) elementToBeMoved.push(updateData[nextIndex])
      else break;
      nextIndex++;
    }
    // remove element
    updateData.splice(draggedIndex, elementToBeMoved.length)
    // add element
    updateData.splice(droppingIndex, 0, ...elementToBeMoved)
    updateList(updateData);
  }

  return (
    <HomeCon>
      <Header />
      {rowData.map((row, index) => {
        return (
          <StandardRow
            key={index}
            content={row.content}
            id={row.id}
            hierarchy={row.hierarchy}
            handleDragStart={onDragStartHandler}
            handleDragOver={onDragOverHandler}
            handleOnDrop={onDropHandler}
            updateList={updateList}
            handleChangeInput={onChangeRowInputHandler}
            handleIndent={onRowIndentHandler}
            handleOutdent={onRowOutdentHandler}
            handleDelete={onRowDeleteHandler}
          />
        )
      })}
      <AddStandard addStandard={addStandardHandler} />
    </HomeCon>
  );
}

export default Home;
