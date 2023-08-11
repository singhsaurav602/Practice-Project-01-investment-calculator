import React from "react";
import ResultsStyle from "./ResultTable.module.css";
import Results from "./Results";

export default function ResultTable(props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className={ResultsStyle.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.yearlyDataOutput.map((yearlyrecord) => (
          <Results
            key={yearlyrecord.year}
            yearNumber={yearlyrecord.year}
            totalSavingsInAYear={formatter.format(
              yearlyrecord.savingsEndOfYear
            )}
            interestGainedInAYear={formatter.format(
              yearlyrecord.yearlyInterest
            )}
            totalInterestGained={formatter.format(
              yearlyrecord.savingsEndOfYear -
                props.initialSavings -
                yearlyrecord.yearlyContribution * yearlyrecord.year
            )}
            totalCapitalInvested={formatter.format(
              props.initialSavings +
                yearlyrecord.yearlyContribution * yearlyrecord.year
            )}
          />
        ))}
      </tbody>
    </table>
  );
}
