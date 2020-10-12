import {MaterialTypes, Shapes} from "../components/Table/types";
import DiningTable from "./DiningTable";
import CoffeeTable from "./CoffeeTable";
import LampTable from "./LampTable";

const fourLeggedWoodenSquareTopDiningTable = new DiningTable(
  1, '/dining-table.jpg', {
    legsMaterial: MaterialTypes.Wood,
    topMaterial: MaterialTypes.Wood,
    topShape: Shapes.Rectangular,
    numberOfSeats: 4,
  });

fourLeggedWoodenSquareTopDiningTable.print();


const fourMetalLeggedWoodenEllipseCoffeeTable = new CoffeeTable(
  2, '/coffee-table.jpg', {
    legsMaterial: MaterialTypes.Metal,
    topMaterial: MaterialTypes.Wood,
    topShape: Shapes.Ellipse,
  });

fourMetalLeggedWoodenEllipseCoffeeTable.print();

const threeLeggedMetalRoundBasedLampTable = new LampTable(
  3, '/lamp-table.jpg', {
    legsMaterial: MaterialTypes.Metal,
    topMaterial: MaterialTypes.Marble,
    baseShape: Shapes.Circle,
    topShape: Shapes.Circle,
    numberOfLegs: 3,
  });

threeLeggedMetalRoundBasedLampTable.print();

