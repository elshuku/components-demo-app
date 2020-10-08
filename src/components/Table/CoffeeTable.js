import React from 'react';
import PropTypes from 'prop-types';
import {TableTypes} from "./types";

function CoffeeTable({
                 id,
                 imageURL,
                 name,
                 price,
                 tableType,
                 material,
                 colour
               }) {

  const getDescription = () => {
    return [
      `Type: ${tableType} Table`,
      `Material is ${material}`,
      `Colour is ${colour}`
    ];
  }

  return (<section>
    <h1>#{id} - {name} : <b>${price}</b></h1>
    <img src={imageURL} alt={tableType}/>
    <ul>
      {getDescription().map((d, idx) => <li key={idx}>{d}</li>)}
    </ul>
  </section>);
}

CoffeeTable.propTypes = {
  id: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  material: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  tableType: PropTypes.string,
};

CoffeeTable.defaultProps = {
  tableType: TableTypes.Coffee
}

export default CoffeeTable;
