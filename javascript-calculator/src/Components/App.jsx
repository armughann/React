import './App.scss';
import { useState } from 'react';
import { Parser } from 'expr-eval';

function App() {
  const [formula, setFormula] = useState('');
  const [display, setDisplay] = useState('0');
  const [isCalculated, setIsCalculated] = useState(false);
  const parser = new Parser();

  const takeInput = (e) => {
    const value = e.target.textContent;
    if (isCalculated) {
      setFormula(value);
      setDisplay(value);
      setIsCalculated(false);
    } else {
      if (value === 'x') {
        setFormula((prevFormula) => prevFormula + '*');
        setDisplay((prevDisplay) => prevDisplay + '*');
      } else {
        if (display === '0') setDisplay(value);
        else setDisplay((prevDisplay) => prevDisplay + value);
        setFormula((prevFormula) => prevFormula + value);
      }

    }
  };

  const calculate = () => {
    try {
      const result = parser.evaluate(formula);
      setDisplay(result.toString());
      setFormula((prevFormula) => prevFormula + '=' + result);
      setIsCalculated(true);
    } catch (error) {
      console.log('Error:', error);
      setDisplay('Error');
      setIsCalculated(true)
    }
  };

  const clear = () => {
    setFormula('');
    setDisplay('0');
  };

  return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="calculator">
                <div id="display" className="col-sm-8">
                  <div id="formula-screen">{formula}</div>
                  <div id="output-screen">{display}</div>
                </div>
                <div className="number-panel">
                  <div className="col-ms-8 ops">
                    <button id="clear" className="button" onClick={clear}>
                      AC
                    </button>
                    <button id="multiply" className="button" onClick={takeInput}>
                      x
                    </button>
                    <button id="divide" className="button ops" onClick={takeInput}>
                      /
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <button id="seven" className="button" onClick={takeInput}>
                      7
                    </button>
                    <button id="eight" className="button" onClick={takeInput}>
                      8
                    </button>
                    <button id="nine" className="button" onClick={takeInput}>
                      9
                    </button>
                    <button id="subtract" className="button ops" onClick={takeInput}>
                      -
                    </button>
                  </div>
                  <div className="col-sm-4">
                    <button id="four" className="button" onClick={takeInput}>
                      4
                    </button>
                    <button id="five" className="button" onClick={takeInput}>
                      5
                    </button>
                    <button id="six" className="button" onClick={takeInput}>
                      6
                    </button>
                    <button id="add" className="button ops" onClick={takeInput}>
                      +
                    </button>
                  </div>
                  <div className="col-sm-4">
                    <button id="one" className="button" onClick={takeInput}>
                      1
                    </button>
                    <button id="two" className="button" onClick={takeInput}>
                      2
                    </button>
                    <button id="three" className="button" onClick={takeInput}>
                      3
                    </button>
                    <button id="zero" className="button" onClick={takeInput}>
                      0
                    </button>
                    <button id="decimal" className="button" onClick={takeInput}>
                      .
                    </button>
                    <button id="equals" className="button double-height" onClick={calculate}>
                      =
                    </button>
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
