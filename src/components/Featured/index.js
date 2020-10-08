import React from 'react';
import Table from '../Table/Table' ;
import CoffeeTable from '../Table/CoffeeTable' ;
import {Colours, MaterialTypes, Shapes, TableTypes} from "../Table/types";

function Featured() {
  return [
    <Table key={'1'} id={1}
           imageURL='/assets/Coffee-Rectangular-Wood-table.PNG'
           name='Niva Coffee Table'
           price={179}
           material={MaterialTypes.Wood}
           colour={Colours.Wood}
    />,
  ];
}

export default Featured;
