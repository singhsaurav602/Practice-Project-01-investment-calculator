// import logo from "./assets/investment-calculator-logo.png";
import AppHeader from "./components/Header/AppHeader";
import CalculatorForm from "./components/Calculator/CalculatorForm";
import ResultTable from "./components/ResultTable/ResultTable";
import React, { useState } from "react";

function App() {
  const [investmentRecords, setInvestmentRecords] = useState(null);
  const [initialInvestment, setInitialInvestment] = useState("");

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    console.log(yearlyData, yearlyData.length);
    // do something with yearlyData ...
    setInvestmentRecords(yearlyData);
    setInitialInvestment(userInput["current-savings"]);
  };

  console.log(investmentRecords);
  return (
    <div>
      <AppHeader />
      <CalculatorForm formHandler={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {!investmentRecords ? (
        <p style={{ textAlign: "center" }}>No Records to display</p>
      ) : (
        <ResultTable
          yearlyDataOutput={investmentRecords}
          initialSavings={initialInvestment}
        />
      )}
    </div>
  );
}

export default App;
