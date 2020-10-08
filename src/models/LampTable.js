import {TableTypes} from "../components/Table/types";
import Table from "./Table";

export default class LampTable extends Table {
  constructor(id, imageURL, {typeType, ...specs}) {
    super(id, imageURL, {tableType: TableTypes.Lamp, ...specs});
  }
}
