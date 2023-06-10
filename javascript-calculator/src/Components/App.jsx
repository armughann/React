import './App.scss';
import {useState, useEffect} from 'react';

function App() {
  const [display, setDisplay] = useState('0');
  const [formula, setFormula] = useState('0');
  const [equal, setEqual] = useState(false);

  const handleClick = (e) => {
    if (e.target.innerHTML === '0' || e.target.innerHTML === '1' || e.target.innerHTML === '2' ||
        e.target.innerHTML === '3' || e.target.innerHTML === '4' || e.target.innerHTML === '5' ||
        e.target.innerHTML === '6' || e.target.innerHTML === '7' || e.target.innerHTML === '8' ||
        e.target.innerHTML === '9' || e.target.innerHTML === '.') {
      if (!equal) {
        if (display.length < 2 && display[0] === '0') {
          setDisplay(e.target.innerHTML);
          setFormula(e.target.innerHTML);
        } else {
          setDisplay(display + e.target.innerHTML);
          setFormula(formula + e.target.innerHTML);
        }
      } else {
        setDisplay(e.target.innerHTML);
        setFormula(e.target.innerHTML);
        setEqual(false);
      }
    } else if (e.target.innerHTML === 'AC') {
      setDisplay('0');
      setFormula('0');
    } else if (e.target.innerHTML === '+' || e.target.innerHTML === '-' ||
               e.target.innerHTML === 'x' || e.target.innerHTML === '/') {
      if (!equal) {
        setDisplay(e.target.innerHTML);
        setFormula(formula + e.target.innerHTML);
      } else {
        setDisplay(e.target.innerHTML);
        setFormula(display + e.target.innerHTML);
        setEqual(false);
      }
    } else if (e.target.innerHTML === '=') {
      for (let i = 0; i < formula.length; i++) {
        if (formula[i] === 'x') {
          setDisplay(formula[i - 1] * formula[i + 1]);
        } else if (formula[i] === '/') {
          setDisplay(formula[i - 1] / formula[i + 1]);
        } else if (formula[i] === '+') {
          setDisplay(formula[i - 1] + formula[i + 1]);
        } else if (formula[i] === '-') {
          setDisplay(formula[i - 1] - formula[i + 1]);
        }
      }
      setEqual(true);
    }
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="calculator">
              <div id="display" className="col-sm-8">
                <div id="formula-screen">
                  { formula }
                </div>
                <div id="output-screen">
                  { display }
                </div>
              </div>
              <div className="number-panel">
                <div className="col-ms-8 ops">
                  <button id="clear" className="button" onClick={(e) => handleClick(e)}>AC</button>
                  <button id="multiply" className="button ops" onClick={(e) => handleClick(e)}>x</button>
                  <button id="divide" className="button ops" onClick={(e) => handleClick(e)}>/</button>
                </div>
                <div className="col-sm-6">
                  <button id="seven" className="button" onClick={(e) => handleClick(e)}>7</button>
                  <button id="eight" className="button" onClick={(e) => handleClick(e)}>8</button>
                  <button id="nine" className="button" onClick={(e) => handleClick(e)}>9</button>
                  <button id="subtract" className="button ops" onClick={(e) => handleClick(e)}>-</button>
                </div>
                <div className="col-sm-4">
                  <button id="four" className="button" onClick={(e) => handleClick(e)}>4</button>
                  <button id="five" className="button" onClick={(e) => handleClick(e)}>5</button>
                  <button id="six" className="button" onClick={(e) => handleClick(e)}>6</button>
                  <button id="add" className="button ops" onClick={(e) => handleClick(e)}>+</button>
                </div>
                <div className="col-sm-4">
                  <button id="one" className="button" onClick={(e) => handleClick(e)}>1</button>
                  <button id="two" className="button" onClick={(e) => handleClick(e)}>2</button>
                  <button id="three" className="button" onClick={(e) => handleClick(e)}>3</button>
                  <button id="zero" className="button" onClick={(e) => handleClick(e)}>0</button>
                  <button id="decimal" className="button" onClick={(e) => handleClick(e)}>.</button>
                  <button id="equals" className="button double-height" onClick={(e) => handleClick(e)}>=</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
