import React from 'react';
import "../index.css";
import TableDisplay from "./TableDisplay";

function MickyMouseTable({displayProps, tableType, tableProps}) {
  return (<div className={'resp-table'}>
    <TableDisplay {...displayProps}></TableDisplay>
    <MickyMouseTableDiscriptor tableType={tableType} {...tableProps}></MickyMouseTableDiscriptor>
  </div>);
}

const MickyMouseTableDiscriptor= () => {
  /**
   *
   * Definition of the MickyMouseTableDiscriptor component
   *
   * Provide specific implementation here.
   */
};

export default MickyMouseTable;
