import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="calculator">
              <div id="display" className="col-sm-8">
                <div id="formula-screen">
                    123
                </div>
                <div id="output-screen">
                    0
                </div>
              </div>
              <div className="number-panel">
                <div className="col-ms-8 ops">
                  <button id="clear" className="button">AC</button>
                  <button id="multiply" className="button ops">x</button>
                  <button id="divide" className="button ops">/</button>
                </div>
                <div className="col-sm-6">
                  <button id="seven" className="button">7</button>
                  <button id="eight" className="button">8</button>
                  <button id="nine" className="button">9</button>
                  <button id="subtract" className="button ops">-</button>
                </div>
                <div className="col-sm-4">
                  <button id="four" className="button">4</button>
                  <button id="five" className="button">5</button>
                  <button id="six" className="button">6</button>
                  <button id="add" className="button ops">+</button>
                </div>
                <div className="col-sm-4">
                  <button id="one" className="button">1</button>
                  <button id="two" className="button">2</button>
                  <button id="three" className="button">3</button>
                  <button id="zero" className="button">0</button>
                  <button id="decimal" className="button">.</button>
                  <button id="equals" className="button double-height">=</button>
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
