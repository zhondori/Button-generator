import React from "react";
import './App.css';
import Button from "./Button/Button";
import Footer from "./Footer/Footer";
import Settings from "./Settings/Settings";
import SourceCodes from "./SourceCodes/SourceCodes";

function App() {
  return (
    <div className="App">
      <h1 className={"title"}>Button Generator</h1>
      <main>
        <Settings />
        <Button />
        <SourceCodes />
        </main>
        <Footer />
    </div>
  );
}

export default App;
