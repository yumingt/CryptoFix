import React from "react";
import "./styles.css";

import { Button } from "./components/Button";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to CryptoFix</h1>
      <h3>Connect your wallet and jump into DeFi</h3>
      <Button
        onClick={() => {
          console.log("You clicked!");
        }}
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--large"
      >
        Deposit
      </Button>
    </div>
  );
}
