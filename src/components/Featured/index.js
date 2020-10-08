import React from 'react';
import Table from '../Table/Table.v2' ;
import {Colours, MaterialTypes, Shapes, TableTypes} from "../Table/types";

function FeaturedTables() {
  return [
    <Table
      key={'1'} /** key is required by React for arrays of components */
      id={1}
      imageURL='/assets/Coffee-Rectangular-Wood-table.PNG'
      name='Niva Coffee Table'
      price={179}
      material={MaterialTypes.Wood}
      colour={Colours.Wood}
      tableType={TableTypes.Coffee}
    />,
    <Table
      key={'2'}
      id={2}
      imageURL='/assets/Dining-Rectangular-Wood-table.PNG'
      name='Retro 6 Seater Dining Table'
      price={399}
      material={MaterialTypes.Wood}
      colour={Colours.Wood}
      tableType={TableTypes.Dining}
      numberOfSeats={6}
    />,
  ];
}

export default FeaturedTables;
