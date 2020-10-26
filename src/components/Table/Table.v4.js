import React from 'react';
import PropTypes from "prop-types";
import "./index.css";
import {TableLegStyles} from "./types";
import TableDisplay from "./Generic/TableDisplay";
import TableDiscriptor from "./Generic/TableDiscriptor";

function Table({displayProps, tableType, tableProps}) {
  return (<div className={'resp-table'}>
    <TableDisplay {...displayProps}></TableDisplay>
    <TableDiscriptor tableType={tableType} {...tableProps}></TableDiscriptor>
  </div>);
}

Table.propTypes = {
  displayProps: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  tableType: PropTypes.string.isRequired,
  tableProps: PropTypes.shape({
    legsMaterial: PropTypes.string.isRequired,
    topMaterial: PropTypes.string.isRequired,
    topShape: PropTypes.string.isRequired,
    topColour: PropTypes.string.isRequired,
    legsColour: PropTypes.string.isRequired,
    legsType: PropTypes.string,
    baseShape: PropTypes.string,
    baseColour: PropTypes.string,
    numberOfSeats: PropTypes.number
  }).isRequired
};

Table.defaultProps = {
  legsType: TableLegStyles.Simple
}


export default Table;
