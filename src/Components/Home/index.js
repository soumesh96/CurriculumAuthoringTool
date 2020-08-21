import React, { useState } from 'react';

import data from './row.json';
import Header from './Header';
import AddStandard from './AddStandard';
import StandardRow from './StandardRow';
import { HomeCon } from './skins';

const Home = () => {
  const [rowData, setRowdata] = useState(data);


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

  return (
    <HomeCon>
      <Header />
      {rowData.map((row, index) => {
        return (
          <StandardRow
            key={index}
            content={row.content}
            id={row.id}
            data={rowData}
            updateList={updateList}
            hierarchy={row.hierarchy}
          />
        )
      })}
      <AddStandard addStandard={addStandardHandler} />
    </HomeCon>
  );
}

export default Home;
