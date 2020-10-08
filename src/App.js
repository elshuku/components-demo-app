import React from 'react';
import './App.css';
import tables from './models/mocks/tables';
import TableListing from './components/TableListing';
import FeaturedTables from "./components/Featured";

function App() {
  return (
    <FeaturedTables />
    // <TableListing tables={tables} />
  );
}

export default App;
