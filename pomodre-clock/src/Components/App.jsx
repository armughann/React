import React, { useState, useEffect, useRef } from 'react';
import { HiArrowSmUp, HiArrowSmDown } from 'react-icons/hi';
import { BiPlay, BiPause } from 'react-icons/bi';
import { FaCircleNotch } from 'react-icons/fa';
import './App.scss';

function App() {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [timerMinutes, setTimerMinutes] = useState(sessionLength);
    const [timerSeconds, setTimerSeconds] = useState(0);
    const [isPaused, setIsPaused] = useState(true);
    const [activeTimer, setActiveTimer] = useState('session');

    const intervalIdRef = useRef(null);
    const audioRef = useRef(null);

    const formatTime = (value) => {
        return value.toString().padStart(2, '0');
    };

    const incrementBreakLength = () => {
        if (breakLength < 60) {
            setBreakLength((prevBreakLength) => prevBreakLength + 1);
        }
    };

    const decrementBreakLength = () => {
        if (breakLength > 1) {
            setBreakLength((prevBreakLength) => prevBreakLength - 1);
        }
    };

    const incrementSessionLength = () => {
        if (sessionLength < 60) {
            setSessionLength((prevSessionLength) => prevSessionLength + 1);
            if (activeTimer === 'session') {
                setTimerMinutes((prevSessionLength) => prevSessionLength + 1);
            }
        }
    };

    const decrementSessionLength = () => {
        if (sessionLength > 1) {
            setSessionLength((prevSessionLength) => prevSessionLength - 1);
            if (activeTimer === 'session') {
                setTimerMinutes((prevSessionLength) => prevSessionLength - 1);
            }
        }
    };

    const startTimer = () => {
        setIsPaused((prevIsPaused) => !prevIsPaused);
    };

    const pauseTimer = () => {
        setIsPaused(true);
    };

    const resetTimer = () => {
        setIsPaused(true);
        clearInterval(intervalIdRef.current);
        setBreakLength(5);
        setSessionLength(25);
        setTimerMinutes(25);
        setTimerSeconds(0);
        setActiveTimer('session');
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    };

    useEffect(() => {
        if (!isPaused) {
            intervalIdRef.current = setInterval(() => {
                setTimerSeconds((prevSeconds) => {
                    if (prevSeconds === 0) {
                        setTimerMinutes((prevMinutes) => {
                            if (prevMinutes === 0) {
                                if (activeTimer === 'session') {
                                    setActiveTimer('break');
                                    return breakLength;
                                } else {
                                    setActiveTimer('session');
                                    return sessionLength;
                                }
                            }
                            return prevMinutes - 1;
                        });
                        return 59;
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        } else {
            clearInterval(intervalIdRef.current);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isPaused, sessionLength, breakLength, activeTimer]);

    useEffect(() => {
        setTimerMinutes(sessionLength);
        setTimerSeconds(0);
    }, [sessionLength]);

    useEffect(() => {
        if (timerMinutes === 0 && timerSeconds === 0) {
            audioRef.current.play();
        }
    }, [timerMinutes, timerSeconds]);

    return (
        <div className="App">
            <h1 id="title">25+5 Clock</h1>
            <div className="container-fluid">
                <div className="row break">
                    <div className="col-sm-4">
                        <h1 id="break-label">Break Length</h1>
                        <button id="break-increment" onClick={incrementBreakLength}>
                            <HiArrowSmUp color="white" size="50px" strokeWidth="1px"/>
                        </button>
                        <div id="break-length">{breakLength}</div>
                        <button id="break-decrement" onClick={decrementBreakLength}>
                            <HiArrowSmDown color="white" size="50px" strokeWidth="1px"/>
                        </button>
                    </div>
                    <div className="col-sm-4">
                        <h1 id="session-label">Session Length</h1>
                        <button id="session-increment" onClick={incrementSessionLength}>
                            <HiArrowSmUp color="white" size="50px" strokeWidth="1px"/>
                        </button>
                        <div id="session-length">{sessionLength}</div>
                        <button id="session-decrement" onClick={decrementSessionLength}>
                            <HiArrowSmDown color="white" size="50px" strokeWidth="1px"/>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2 timer mx-auto">
                        <div id="timer-label">{activeTimer === 'session' ? 'Session' : 'Break'}</div>
                        <div id="time-left">
                            {formatTime(timerMinutes)}:{formatTime(timerSeconds)}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button id="start_stop" onClick={startTimer}>
                            <BiPlay color="white" size="50px" strokeWidth="1px"/>
                        </button>
                        <button id="start_stop" onClick={pauseTimer}>
                            <BiPause color="white" size="50px" strokeWidth="1px"/>
                        </button>
                        <button id="reset" onClick={resetTimer}>
                            <FaCircleNotch color="white" size="50px" strokeWidth="1px"/>
                        </button>
                    </div>
                </div>
            </div>
            <audio id="beep" ref={audioRef} src={'/sound/beep.mp3'} />
        </div>
    );
}

export default App;
