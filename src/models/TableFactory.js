import { TableTypes } from "../components/Table/types";
import DiningTable from "./DiningTable";
import CoffeeTable from "./CoffeeTable";
import LampTable from "./LampTable";

export default (id,
                imageURL,
                specs) => {

  const {
    tableType = TableTypes.Dining,
  } = specs ;

  switch (tableType) {
    case TableTypes.Dining:
      return new DiningTable(id, imageURL, specs);
    case TableTypes.Coffee:
      return new CoffeeTable(id, imageURL, specs);
    case TableTypes.Lamp:
      return new LampTable(id, imageURL, specs);

    default:
      throw new Error(`Could not find the requested table type ${tableType}`);
  }
}
