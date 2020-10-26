import React from 'react';
import PropTypes from 'prop-types';
import {Shapes, TableLegStyles, TableTypes} from "../types";
import Table from "../Table.v4";

function ClassicCoffeeTable({displayProps, tableType, tableProps}){
  const {material, colour} = tableProps;
  const enhTableProps = {
    legsType: TableLegStyles.Simple,
    legsMaterial: material,
    legsColour: colour,
    topShape: Shapes.Rectangular,
    topMaterial: material,
    topColour: colour
  };

  return (<Table displayProps={displayProps} tableType={tableType} tableProps={enhTableProps}/>);
}

ClassicCoffeeTable.propTypes = {
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

ClassicCoffeeTable.defaultProps = {
  tableType: TableTypes.Coffee
}

export default ClassicCoffeeTable;
