import React from 'react';
import PropTypes from "prop-types";

function Table({
                 id,
                 imageURL,
                 name,
                 price,
                 tableType,
                 material,
                 colour,
                 numberOfSeats,
               }) {

  const getDescription = () => {
    return [
      `Type: ${tableType} Table`,
      `Material is ${material}`,
      `Colour is ${colour}`,
      `Number of Seats ${numberOfSeats}`
    ];
  }

  return (<div>
    <h1>#{id} - {name} : <b>${price}</b></h1>
    <img src={imageURL} alt={tableType}/>
    <ul>
      {getDescription().map((d, idx) => <li key={idx}>{d}</li>)}
    </ul>
  </div>);
}

Table.propTypes = {
  id: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  material: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  tableType: PropTypes.string.isRequired,
  numberOfSeats: PropTypes.number
};

Table.defaultProps = {}

export default Table;
