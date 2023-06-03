import React, { useEffect } from 'react';
import './App.scss';

function App() {
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleKeyDown = (e) => {
        const key = e.key.toUpperCase();
        const audioElement = document.getElementById(key);
        if (audioElement) {
            audioElement.currentTime = 0; // Reset currentTime to start from the beginning
            audioElement.play()
                .catch((error) => {
                    console.log(error);
                });

            const drumPad = audioElement.parentElement;
            drumPad.classList.add('active');
            setTimeout(() => {
                drumPad.classList.remove('active');
            }, 50);

            const audioName = audioElement.getAttribute('data-name');
            document.getElementById('display').innerHTML = audioName;
        }
    };

    const handleClick = (e) => {
        const audioElement = e.target.children[1];
        if (audioElement) {
            audioElement.currentTime = 0; // Reset currentTime to start from the beginning
            audioElement.play()
                .catch((error) => {
                    console.log(error);
                });

            e.target.classList.add('active');
            setTimeout(() => {
                e.target.classList.remove('active');
            }, 50);

            const audioName = audioElement.getAttribute('data-name');
            document.getElementById('display').innerHTML = audioName;
        }
    };

    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row">
                    <div id="drum-machine" className="col-12">
                        <div id="display"></div>
                        <div className="row pad">
                            <div className="col-sm-4">
                                <div className="drum-pad" id="audio1" onClick={handleClick}>
                                    <h4>Q</h4>
                                    <audio src={"/assets/sound/Heater-1.mp3"} className={"clip"} id={"Q"} data-name={"Heater 1"}></audio>
                                </div>
                                <div className="drum-pad" id="audio2" onClick={handleClick}>
                                    <h4>A</h4>
                                    <audio src={"/assets/sound/Heater-4_1.mp3"} className={"clip"} id={"A"} data-name={"Heater 4"}></audio>
                                </div>
                                <div className="drum-pad" id="audio3" onClick={handleClick}>
                                    <h4>Z</h4>
                                    <audio src={"/assets/sound/Kick_n_Hat.mp3"} className={"clip"} id={"Z"} data-name={"Kick n' Hat"}></audio>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="drum-pad" id="audio4" onClick={handleClick}>
                                    <h4>W</h4>
                                    <audio src={"/assets/sound/Heater-2.mp3"} className={"clip"} id={"W"} data-name={"Heater 2"}></audio>
                                </div>
                                <div className="drum-pad" id="audio5" onClick={handleClick}>
                                    <h4>S</h4>
                                    <audio src={"/assets/sound/Heater-6.mp3"} className={"clip"} id={"S"} data-name={"Clap"}></audio>
                                </div>
                                <div className="drum-pad" id="audio6" onClick={handleClick}>
                                    <h4>X</h4>
                                    <audio src={"/assets/sound/RP4_KICK_1.mp3"} className={"clip"} id={"X"} data-name={"Kick"}></audio>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="drum-pad" id="audio7" onClick={handleClick}>
                                    <h4>E</h4>
                                    <audio src={"/assets/sound/Heater-3.mp3"} className={"clip"} id={"E"} data-name={"Heater 3"}></audio>
                                </div>
                                <div className="drum-pad" id="audio8" onClick={handleClick}>
                                    <h4>D</h4>
                                    <audio src={"/assets/sound/Dsc_Oh.mp3"} className={"clip"} id={"D"} data-name={"Open HH"}></audio>
                                </div>
                                <div className="drum-pad" id="audio9" onClick={handleClick}>
                                    <h4>C</h4>
                                    <audio src={"/assets/sound/Cev_H2.mp3"} className={"clip"} id={"C"} data-name={"Closed HH"}></audio>
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
