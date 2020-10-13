import React from "react";

const TableDiscriptor = ({tableType, topColour, topShape, topMaterial, legsColour, legsType, legsMaterial, baseShape, baseColour, numberOfSeats}) => {
  const getDescription = () => {
    const desc = [
      <span>Type: <u>{tableType}</u> Table</span>,
      <span>Top is <u>{topColour}</u> <u>{topShape}</u> <u>{topMaterial}</u></span>,
      <span>Legs are made of <u>{legsColour}</u> colour <u>{legsType}</u> <u>{legsMaterial}</u></span>,
    ];

    if (baseShape && baseColour) {
      desc.push(<span>Base of the table is <u>{baseColour}</u> colour <u>{baseShape}</u> </span>);
    }

    if (numberOfSeats) {
      desc.push(<span>Number of Seats <u>{numberOfSeats}</u></span>);
    }

    return desc;
  }

  return <ul>
    {getDescription().map((d, idx) => <li key={idx}>{d}</li>)}
  </ul>;
}

export default TableDiscriptor;
