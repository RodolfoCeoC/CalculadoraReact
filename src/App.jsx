import React, { useState } from "react";
import './App.css';
document.body.style = 'background: rgba(171, 28, 73, 0.74)';

function App() {

  const initialState = JSON.parse(localStorage.getItem("result")) || [];
  const [num, setnum] = useState(initialState)


  const [result, setResult] = useState("");

  const handleClickCalc = (event) => {

    setResult(result.concat(event.target.value))
  }

  const ClearCalc = () => {
    setResult("");
  }

  const calcular = () => {
    setResult(eval(result).toString());
    setnum([...num, useState])
    localStorage.setItem("result", JSON.stringify(result));
  }
  
  const historial = () => {
    localStorage.getItem("result")
  }

  return (
    <div className="calc">

      <div className="history">
        <h3>Historial</h3>
        <ol value={historial}></ol>
      </div>

      <input type="text"
        placeholder="0" id="answer"
        value={result} />

      <input type="button"
        value="9"
        className="button"
        onClick={handleClickCalc} />

      <input type="button"
        value="8"
        className="button"
        onClick={handleClickCalc} />

      <input type="button"
        value="7"
        className="button"
        onClick={handleClickCalc} />

      <input type="button"
        value="+"
        className="button"
        onClick={handleClickCalc} />

      <input type="button"
        value="6"
        className="button"
        onClick={handleClickCalc} />

      <input type="button"
        value="5"
        className="button"
        onClick={handleClickCalc} />

      <input type="button"
        value="4"
        className="button"
        onClick={handleClickCalc} />

      <input type="button"
        value="-"
        className="button"
        onClick={handleClickCalc} />

      <input type="button"
        value="3"
        className="button"
        onClick={handleClickCalc} />

      <input type="button"
        value="2"
        className="button"
        onClick={handleClickCalc} />

      <input type="button"
        value="1"
        className="button"
        onClick={handleClickCalc} />

      <input type="button"
        value="*"
        className="button"
        onClick={handleClickCalc} />

      <input type="button"
        value="."
        className="button"
        onClick={handleClickCalc} />

      <input type="button"
        value="0"
        className="button"
        onClick={handleClickCalc} />

      <input type="button"
        value="%"
        className="button"
        onClick={handleClickCalc} />

      <input type="button"
        value="/"
        className="button"
        onClick={handleClickCalc} />

      <input type="button"
        value="C"
        className="button button1"
        onClick={ClearCalc} />

      <input type="button"
        value="="
        className="button button1"
        onClick={calcular} />

    </div>
  );
}

export default App;
