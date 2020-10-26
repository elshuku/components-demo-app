import React from 'react';
import Table from '../Table/Table.v4' ;
import {Colours, MaterialTypes, Shapes, TableLegStyles, TableTypes} from "../Table/types";
import ClassicCoffeeTable from "../Table/Specialised/ClassicCoffeeTable";
import RetroDiningTable from "../Table/Specialised/RetroDiningTable";

function FeaturedTables() {
  return [
    <Table
      key={'3'}
      displayProps = {{
        id: 3,
        imageURL: 'assets/Lamp-Round-Marble-RoundBase_table.PNG',
        name: 'Colleti Lamp Table',
        price: 199,
      }}
      tableProps = {{
        topMaterial:MaterialTypes.Marble,
        legsMaterial:MaterialTypes.Metal,
        topColour:Colours.White,
        legsColour:Colours.Metallic,
        topShape:Shapes.Circle,
        legsType:TableLegStyles.Funky,
        baseShape: Shapes.Circle,
        baseColour: Colours.Metallic,
      }}
      tableType={TableTypes.Lamp}
    />,
    <RetroDiningTable
      key={'2'}
      displayProps={{
        id:2,
        imageURL:'/assets/Dining-Rectangular-Wood-table.PNG',
        name:'Retro 6 Seater Dining Table',
        price:399,
      }}
      tableProps={{
        material: MaterialTypes.Wood,
        colour: Colours.Wood,
        numberOfSeats: 6,
      }}
    />,
    <ClassicCoffeeTable
      key={'1'} /** key is required by React for arrays of components */
      displayProps={{
        id: 1,
        imageURL: '/assets/Coffee-Rectangular-Wood-table.PNG',
        name: 'Niva Coffee Table',
        price: 179,
      }}
      tableProps={{
        material: MaterialTypes.Wood,
        colour: Colours.Wood,
      }}
    />,
  ];
}

export default FeaturedTables;
