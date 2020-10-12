import React from 'react';
import PropTypes from "prop-types";
import "./index.css";

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
    const desc = [
      `Type: ${tableType} Table`,
      `Material is ${material}`,
      `Colour is ${colour}`,
    ];

    if (numberOfSeats) {
      desc.push(`Number of Seats ${numberOfSeats}`)
    }

    return desc;
  }

  return (<div className={'resp-table'}>
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
