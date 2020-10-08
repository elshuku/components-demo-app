import {MaterialTypes, Shapes, TableTypes} from "../../components/Table/types";

export default [
  {
    id: 1,
    imageURL: '/assets/Dining-Square-Wood-4Legged_table.PNG',
    specs: {
      name: 'Retro 6 Seater Dining Table',
      price: 399,
      tableType: TableTypes.Dining,
      legsMaterial: MaterialTypes.Wood,
      topMaterial: MaterialTypes.Wood,
      topShape: Shapes.Square,
      numberOfSeats: 6,
    }
  },
  {
    id: 2,
    imageURL: '/assets/Coffee-Round-Wood-4Legged_table.PNG',
    specs: {
      name: 'Lovett Coffee Table',
      price: 189,
      tableType: TableTypes.Coffee,
      legsMaterial: MaterialTypes.Metal,
      topMaterial: MaterialTypes.Wood,
      topShape: Shapes.Ellipse,
    }
  },
  {
    id: 3,
    imageURL: '/assets/Lamp-Round-Marble-RoundBase_table.PNG',
    specs: {
      name: 'Colleti Lamp Table',
      price: 199,
      tableType: TableTypes.Lamp,
      legsMaterial: MaterialTypes.Metal,
      topMaterial: MaterialTypes.Marble,
      baseShape: Shapes.Circle,
      topShape: Shapes.Circle,
      numberOfLegs: 3,
    }
  },
  {
    id: 4,
    imageURL: '/assets/Toronto-6-Seater-Dining-Table.PNG',
    specs: {
      name: 'Toronto 6 Seater Dining Table',
      price: 499,
      tableType: TableTypes.Dining,
      legsMaterial: MaterialTypes.Wood,
      topMaterial: MaterialTypes.Wood,
      topShape: Shapes.Square,
      numberOfSeats: 6,
    }
  },
];
