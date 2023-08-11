import logo from "../../assets/investment-calculator-logo.png";
import React from "react";
import HeaderStyles from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={HeaderStyles.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
