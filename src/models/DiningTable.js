import {TableTypes} from "../components/Table/types";
import Table from "./Table";

export default class DiningTable extends Table {
  constructor(id, imageURL, {tableType, numberOfLegs = 4, numberOfSeats = 4, baseShape, ...specs}) {
    super(id, imageURL, {
      tableType: TableTypes.Dining,
      numberOfLegs,
      baseShape: null,
      ...specs,
    });
    this.numberOfSeats = numberOfSeats;
  }

  getDescription() {
    return super.getDescription().concat([`Table sits ${this.numberOfSeats} people`]);
  }
}
