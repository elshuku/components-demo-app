import React from 'react';
import Table from '../Table/Table' ;

function TableListing({tables}) {
  return (
    tables.map( t => {
      const {id, imageURL, specs} = t;
      return <Table key={id} id={id} imageURL={imageURL} {...specs} />
    } )
  );
}

export default TableListing;
