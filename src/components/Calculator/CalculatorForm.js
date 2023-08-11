import React, { useState } from "react";
import CalcStyles from "./CalculatorForm.module.css";

export default function CalculatorForm(props) {
  const initialState = {
    "current-savings": 10000,
    "yearly-contribution": 100000,
    "expected-return": 7,
    duration: 12,
  };

  const [userInput, setUserInput] = useState(initialState);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [input]: +value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.formHandler(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialState);
  };

  return (
    <form className={CalcStyles.form} onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            value={userInput["current-savings"]}
            id="current-savings"
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            value={userInput["yearly-contribution"]}
            id="yearly-contribution"
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={CalcStyles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            value={userInput["expected-return"]}
            id="expected-return"
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            value={userInput["duration"]}
            id="duration"
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className={CalcStyles.actions}>
        <button
          type="reset"
          onClick={resetHandler}
          className={CalcStyles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={CalcStyles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
