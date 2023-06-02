import './App.scss';
import {useEffect, useState} from "react";

function App() {
    const Q = new Audio("/assets/sound/Heater-1.mp3");
    const W = new Audio("/assets/sound/Heater-2.mp3");
    const E = new Audio("/assets/sound/Heater-3.mp3");
    const A = new Audio("/assets/sound/Heater-4_1.mp3");
    const S = new Audio("/assets/sound/Heater-6.mp3");
    const D = new Audio("/assets/sound/Dsc_Oh.mp3");
    const Z = new Audio("/assets/sound/Kick_n_Hat.mp3");
    const X = new Audio("/assets/sound/RP4_KICK_1.mp3");
    const C = new Audio("/assets/sound/Cev_H2.mp3");

    const [display, setDisplay] = useState("");

    useEffect(() => {
        const playSound = e => {
            switch (e.key.toUpperCase()) {
                case "Q":
                    Q.play();
                    document.getElementById("Q").classList.add("active");
                    setTimeout(() => {
                        document.getElementById("Q").classList.remove("active");
                    }, 100);
                    setDisplay("Heater 1");
                    break;
                case "W":
                    W.play();
                    document.getElementById("W").classList.add("active");
                    setTimeout(() => {
                        document.getElementById("W").classList.remove("active");
                    }, 100);
                    setDisplay("Heater 2");
                    break;
                case "E":
                    E.play();
                    document.getElementById("E").classList.add("active");
                    setTimeout(() => {
                        document.getElementById("E").classList.remove("active");
                    }, 100);
                    setDisplay("Heater 3");
                    break;
                case "A":
                    A.play();
                    document.getElementById("A").classList.add("active");
                    setTimeout(() => {
                        document.getElementById("A").classList.remove("active");
                    }, 100);
                    setDisplay("Heater 4");
                    break;
                case "S":
                    S.play();
                    document.getElementById("S").classList.add("active");
                    setTimeout(() => {
                        document.getElementById("S").classList.remove("active");
                    }, 100);
                    setDisplay("Clap");
                    break;
                case "D":
                    D.play();
                    document.getElementById("D").classList.add("active");
                    setTimeout(() => {
                        document.getElementById("D").classList.remove("active");
                    }, 100);
                    setDisplay("Open HH");
                    break;
                case "Z":
                    Z.play();
                    document.getElementById("Z").classList.add("active");
                    setTimeout(() => {
                        document.getElementById("Z").classList.remove("active");
                    }, 100);
                    setDisplay("Kick n' Hat");
                    break;
                case "X":
                    X.play();
                    document.getElementById("X").classList.add("active");
                    setTimeout(() => {
                        document.getElementById("X").classList.remove("active");
                    }, 100);
                    setDisplay("Kick");
                    break;
                case "C":
                    C.play();
                    document.getElementById("C").classList.add("active");
                    setTimeout(() => {
                        document.getElementById("C").classList.remove("active");
                    }, 100);
                    setDisplay("Closed HH");
                    break;
                default:
                    break;
            }
        }
        document.addEventListener('keydown', playSound);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', playSound);
        };
    }, []);

  return (
    <div className="App">
        <div className="container-fluid">
            <div className="row">
                <div id="drum-machine" className="col-12">
                    <div id="drum-display">{display}</div>
                    <div className="row pad">
                        <div className="col-sm-4">
                            <div className="drum-pad" id="Q">
                                <h4>Q</h4>
                            </div>
                            <div className="drum-pad" id="A">
                                <h4>A</h4>
                            </div>
                            <div className="drum-pad" id="Z">
                                <h4>Z</h4>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="drum-pad" id="W">
                                <h4>W</h4>
                            </div>
                            <div className="drum-pad" id="S">
                                <h4>S</h4>
                            </div>
                            <div className="drum-pad" id="X">
                                <h4>X</h4>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="drum-pad" id="E">
                                <h4>E</h4>
                            </div>
                            <div className="drum-pad" id="D">
                                <h4>D</h4>
                            </div>
                            <div className="drum-pad" id="C">
                                <h4>C</h4>
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
