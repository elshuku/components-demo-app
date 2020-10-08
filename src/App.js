import React from 'react';
import './App.css';
import tables from './models/mocks/tables';
import TableListing from './components/TableListing';
import Featured from "./components/Featured";

function App() {
  return (
    <Featured />
    // <TableListing tables={tables} />
  );
}

export default App;
