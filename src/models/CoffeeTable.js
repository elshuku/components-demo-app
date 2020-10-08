import {TableTypes} from "../components/Table/types";
import Table from "./Table";

export default class CoffeeTable extends Table {
  constructor(id, imageURL, {tableType, ...specs}) {
    super(id, imageURL, {tableType: TableTypes.Coffee, ...specs});
  }
}
