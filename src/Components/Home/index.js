import React, { useContext, useEffect, useState } from "react";

import Header from "./Header";
import AddStandard from "./AddStandard";
import StandardRow from "./StandardRow";
import { HomeCon } from "./skins";
import { StandardRowContext } from "../../Context/StandardContext";

const Home = () => {
  const [rowData, setRowdata] = useContext(StandardRowContext);
  const [isVisibleToolTip, setIsVisibleToolTip] = useState(true);

  useEffect(() => {
    const StandardRowData = sessionStorage.getItem("rowData") || "";
    if (StandardRowData) {
      setRowdata(JSON.parse(sessionStorage.getItem("rowData")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addStandardHandler = () => {
    const updatedData = [...rowData];
    const arrayLength = updatedData.length - 1;
    updatedData.push({
      id: Math.floor(Math.random() * 1000) + 1,
      content: "",
      hierarchy: updatedData.length > 0 ? updatedData[arrayLength].hierarchy : 1,
    });
    setRowdata(updatedData);
  };

  const updateList = (data) => {
    setRowdata(data);
    sessionStorage.setItem("rowData", JSON.stringify(data));
  };

  const onActionHandler = (id, actionType) => {
    const updateData = [...rowData];
    const index = updateData.findIndex((data) => data.id === id);
    const selectedRow = updateData[index];
    if (index > -1) {
      if (actionType === "indent") {
        selectedRow.hierarchy = selectedRow.hierarchy - 1;
      } else if (actionType === "outdent") {
        selectedRow.hierarchy = selectedRow.hierarchy + 1;
      }
    }
    updateList(updateData);
  };

  const onChangeRowInputHandler = (e, id) => {
    const updateData = [...rowData];
    const index = updateData.findIndex((data) => data.id === id);
    if (index > -1) updateData[index].content = e.target.value;
    updateList(updateData);
  };

  const onDragStartHandler = (e, id) => {
    e.dataTransfer.setData("id", id);
    // disabling the visiblity of tooltip
    setIsVisibleToolTip(false);
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
  };

  const getUpdatedChildElements = (updateData, index, droppingIndex, actionType) => {
    let nextIndex = index + 1;
    if (index > -1) { 
      const elementToBeDeleted = [updateData[index]];
      // getting the child elements
      while (updateData.length > nextIndex) {
        if (updateData[nextIndex].hierarchy > updateData[index].hierarchy)
          elementToBeDeleted.push(updateData[nextIndex]);
        else break;
        nextIndex++;
      }
      // remove element
      updateData.splice(index, elementToBeDeleted.length);
      // add element
      if (actionType === 'drop')
        updateData.splice(droppingIndex, 0, ...elementToBeDeleted);
      updateList(updateData);
    }
  }

  const onRowDeleteHandler = (id) => {
    const updateData = [...rowData];
    const index = updateData.findIndex((data) => data.id === id);
    // let nextIndex = index + 1;
    getUpdatedChildElements(updateData, index, null, 'delete');
    // if (index > -1) {
    //   const elementToBeDeleted = [updateData[index]];
    //   // getting the child elements
    //   while (updateData.length > nextIndex) {
    //     if (updateData[nextIndex].hierarchy > updateData[index].hierarchy)
    //       elementToBeDeleted.push(updateData[nextIndex]);
    //     else break;
    //     nextIndex++;
    //   }
    //   // remove element
    //   updateData.splice(index, elementToBeDeleted.length);
    //   updateList(updateData);
    // }
  };

  const onDropHandler = (e, id) => {
    const updateData = [...rowData];
    const dragItemId = Number(e.dataTransfer.getData("id"));
    const droppingIndex = updateData.findIndex((data) => data.id === id);
    const draggedIndex = updateData.findIndex((data) => data.id === dragItemId);
    // let nextIndex = draggedIndex + 1;
    // getting the child elements
    getUpdatedChildElements(updateData, draggedIndex, droppingIndex, 'drop');
    // const elementToBeMoved = [updateData[draggedIndex]];
    // getting the child elements
    // while (updateData.length > nextIndex) {
    //   if (updateData[nextIndex].hierarchy > updateData[draggedIndex].hierarchy)
    //     elementToBeMoved.push(updateData[nextIndex]);
    //   else break;
    //   nextIndex++;
    // }
    // // remove element
    // updateData.splice(draggedIndex, elementToBeMoved.length);
    // // add element
    // updateData.splice(droppingIndex, 0, ...elementToBeMoved);
    // updateList(updateData);
    // enabling the visibility of tooltip
    setIsVisibleToolTip(true);
  };

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
            isVisibleToolTip={isVisibleToolTip}
            handleDragStart={onDragStartHandler}
            handleDragOver={onDragOverHandler}
            handleOnDrop={onDropHandler}
            updateList={updateList}
            handleChangeInput={onChangeRowInputHandler}
            handleAction={onActionHandler}
            handleDelete={onRowDeleteHandler}
          />
        );
      })}
      <AddStandard addStandard={addStandardHandler} />
    </HomeCon>
  );
};

export default Home;
