import React from "react";

const TableDisplay = ({id, name, price, imageURL, tableType}) => <>
  <h1>#{id} - {name} : <b>${price}</b></h1>
  <img src={imageURL} alt={tableType}/>
</>;

export default TableDisplay;

