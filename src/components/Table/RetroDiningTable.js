import React from 'react';
import PropTypes from 'prop-types';
import {Shapes, TableLegStyles, TableTypes} from "./types";
import Table from "./Table.v3";

function RetroDiningTable({
                            id,
                            imageURL,
                            name,
                            price,
                            tableType,
                            material,
                            colour,
                            numberOfSeats,
                          }) {

  return (<Table
    /** specific properties */
    id={id} imageURL={imageURL} name={name} price={price} tableType={tableType} numberOfSeats={numberOfSeats}
    // Defaulted generic properties
                 topShape={Shapes.Rectangular}
                 legsMaterial={material}
                 topMaterial={material}
                 legsColour={colour}
                 topColour={colour}
                 legsType={TableLegStyles.Simple}
  />);
}

RetroDiningTable.propTypes = {
  id: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  material: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  tableType: PropTypes.string,
};

RetroDiningTable.defaultProps = {
  tableType: TableTypes.Coffee
}

export default RetroDiningTable;
