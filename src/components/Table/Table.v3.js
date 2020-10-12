import React from 'react';
import PropTypes from "prop-types";
import "./index.css";
import {MaterialTypes, Shapes, TableLegStyles} from "./types";

function Table({
                 id,
                 imageURL,
                 name,
                 price,
                 tableType,
                 legsMaterial,
                 topMaterial,
                 topShape,
                 baseShape,
                 topColour,
                 legsColour,
                 baseColour,
                 legsType,
                 numberOfSeats,
               }) {

  const getDescription = () => {
    const desc = [
      <span>Type: <u>{tableType}</u> Table</span>,
      <span>Top is <u>{topColour}</u> <u>{topShape}</u> <u>{topMaterial}</u></span>,
      <span>Legs are made of <u>{legsColour}</u> <u>{legsType}</u> <u>{legsMaterial}</u></span>,
    ];

    if (baseShape && baseColour) {
      desc.push(<span>Base of the table is <u>{baseShape}</u> <u>${baseColour}</u></span>);
    }

    if (numberOfSeats) {
      desc.push(<span>Number of Seats <u>{numberOfSeats}</u></span>);
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
  tableType: PropTypes.string.isRequired,
  legsMaterial: PropTypes.string.isRequired,
  topMaterial: PropTypes.string.isRequired,
  topShape: PropTypes.string.isRequired,
  topColour: PropTypes.string.isRequired,
  legsColour: PropTypes.string.isRequired,
  legsType: PropTypes.string,
  baseShape: PropTypes.string,
  baseColour: PropTypes.string,
  numberOfSeats: PropTypes.number
};

Table.defaultProps = {
  legsType: TableLegStyles.Simple
}

export default Table;
