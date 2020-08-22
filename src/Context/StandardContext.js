import React, { useState, createContext } from 'react';

export const StandardRowContext = createContext();

export const StandardRowsProvider = (props) => {
  const [rowData, setRowdata] = useState([
    {
      id: 1,
      content: "",
      hierarchy: 1.
    },
  ]);
  return (
    <StandardRowContext.Provider value={[rowData, setRowdata]}>
      {props.children}
    </StandardRowContext.Provider>
  );
}

