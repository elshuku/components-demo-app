import React from "react";

const DescriptionList = (list) => {
  return <ul>
    {list.map((d, idx) => <li key={idx}>{d}</li>)}
  </ul>;
}

export default DescriptionList;
