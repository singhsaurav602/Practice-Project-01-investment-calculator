import React from "react";
// import ResultStyles from "./Results.module.css";

export default function Results(props) {
  return (
    <tr>
      <td>{props.yearNumber}</td>
      <td>{props.totalSavingsInAYear}</td>
      <td>{props.interestGainedInAYear}</td>
      <td>{props.totalInterestGained}</td>
      <td>{props.totalCapitalInvested}</td>
    </tr>
  );
}
