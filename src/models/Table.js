import {TableTypes, Shapes, MaterialTypes} from "../components/Table/types";

export default class Table {
  constructor(id,
              imageURL,
              {
                name,
                price,
                tableType = TableTypes.Dining,
                numberOfLegs = 4,
                legsMaterial = MaterialTypes.Wood,
                topMaterial = MaterialTypes.Wood,
                topShape = Shapes.Square,
                baseShape = null
              }) {

    this.id = id;
    this.imageURL = imageURL;
    this.name = name;
    this.price = price;
    this.tableType = tableType;
    this.numberOfLegs = numberOfLegs;
    this.legsMaterial = legsMaterial;
    this.topMaterial = topMaterial;
    this.topShape = topShape;
    this.baseShape = baseShape;
  }

  getDescription() {
    return [
      `Type: ${this.tableType}`,
      `Name: ${this.name}`,
      `Has ${this.numberOfLegs} Legs made from ${this.legsMaterial}`,
      `Has ${this.topShape} Top made from ${this.topMaterial}`,
      `Has ${this.baseShape ? this.baseShape : 'No'} base`,
      `Costs $${this.price}`,
    ];
  }

  print() {
    const desc = this.getDescription();
    console.log(' ---- Table Characteristics ----');
    desc.forEach(line => console.log(line));
  }
}
