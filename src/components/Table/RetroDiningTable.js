import React from 'react';
import PropTypes from 'prop-types';
import {Shapes, TableLegStyles, TableTypes} from "./types";
import Table from "./Table.v4";

function RetroDiningTable({displayProps, tableType, tableProps}){
  const {material, colour, numberOfSeats} = tableProps;
  const enhTableProps = {
    legsType: TableLegStyles.Simple,
    legsMaterial: material,
    legsColour: colour,
    topShape: Shapes.Rectangular,
    topMaterial: material,
    topColour: colour,
    numberOfSeats: numberOfSeats,
  };

  return (<Table displayProps={displayProps} tableType={tableType} tableProps={enhTableProps}/>);
}

RetroDiningTable.propTypes = {
  displayProps: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  tableType: PropTypes.string.isRequired,
  tableProps: PropTypes.shape({
    material: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
  }).isRequired
};

RetroDiningTable.defaultProps = {
  tableType: TableTypes.Dining
}

export default RetroDiningTable;
