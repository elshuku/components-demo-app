import React from 'react';
import Table from '../Table/Table.v3' ;
import {Colours, MaterialTypes, Shapes, TableLegStyles, TableTypes} from "../Table/types";

function FeaturedTables() {
  return [
    <Table
      key={'3'}
      id={3}
      imageURL='assets/Lamp-Round-Marble-RoundBase_table.PNG'
      name='Colleti Lamp Table'
      price={199}
      topMaterial={MaterialTypes.Marble}
      legsMaterial={MaterialTypes.Metal}
      topColour={Colours.White}
      legsColour={Colours.Metallic}
      topShape={Shapes.Circle}
      legsType={TableLegStyles.Funky}
      tableType={TableTypes.Lamp}
    />,
    <Table
      key={'1'} /** key is required by React for arrays of components */
      id={1}
      imageURL='/assets/Coffee-Rectangular-Wood-table.PNG'
      name='Niva Coffee Table'
      price={179}
      topMaterial={MaterialTypes.Wood}
      legsMaterial={MaterialTypes.Wood}
      topColour={Colours.Wood}
      legsColour={Colours.Wood}
      topShape={Shapes.Ellipse}
      tableType={TableTypes.Coffee}
    />,
    <Table
      key={'2'}
      id={2}
      imageURL='/assets/Dining-Rectangular-Wood-table.PNG'
      name='Retro 6 Seater Dining Table'
      price={399}
      topMaterial={MaterialTypes.Wood}
      legsMaterial={MaterialTypes.Wood}
      topColour={Colours.Wood}
      legsColour={Colours.Wood}
      topShape={Shapes.Rectangular}
      tableType={TableTypes.Dining}
      numberOfSeats={6}
    />,
  ];
}

export default FeaturedTables;

// Table.v2
// <Table
//   key={'1'} /** key is required by React for arrays of components */
//   id={1}
//   imageURL='/assets/Coffee-Rectangular-Wood-table.PNG'
//   name='Niva Coffee Table'
//   price={179}
//   material={MaterialTypes.Wood}
//   colour={Colours.Wood}
//   tableType={TableTypes.Coffee}
// />,
//   <Table
//     key={'2'}
//     id={2}
//     imageURL='/assets/Dining-Rectangular-Wood-table.PNG'
//     name='Retro 6 Seater Dining Table'
//     price={399}
//     material={MaterialTypes.Wood}
//     colour={Colours.Wood}
//     tableType={TableTypes.Dining}
//     numberOfSeats={6}
//   />,
