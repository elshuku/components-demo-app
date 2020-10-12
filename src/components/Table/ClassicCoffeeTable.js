import React from 'react';
import PropTypes from 'prop-types';
import {Shapes, TableLegStyles, TableTypes} from "./types";
import Table from "./Table.v3";

function ClassicCoffeeTable({
                 id,
                 imageURL,
                 name,
                 price,
                 tableType,
                 material,
                 colour
               }) {

  return (<Table id={id} imageURL={imageURL} name={name} price={price} tableType={tableType}
                 topShape={Shapes.Rectangular}
                 legsMaterial={material}
                 topMaterial={material}
                 legsColour={colour}
                 topColour={colour}
                 legsType={TableLegStyles.Simple}
  />);
}

ClassicCoffeeTable.propTypes = {
  id: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  material: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  tableType: PropTypes.string,
};

ClassicCoffeeTable.defaultProps = {
  tableType: TableTypes.Coffee
}

export default ClassicCoffeeTable;
