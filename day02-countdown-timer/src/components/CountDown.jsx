import { useEffect, useState } from "react";

const CountDown = () => {

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [isStart, setIsStart] = useState(false);
    const [intervalID, setInvervalID] = useState(0);


    const handleStart = () => {
        if (hours < 0 || minutes < 0 || seconds <= 0) {
            alert("Invalid input!!")
            return
        } else {
            setIsStart(true)
        }
    }

    const handleStop = () => {
        setIsStart(false);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        clearInterval(intervalID)
    }

    const handleReset = () => {
        setIsStart(false);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        clearInterval(intervalID)
    }

    const startInterval = (sec, min, hr, tid) => {
        if (sec > 0) {
            setSeconds(() => sec - 1)
        } else if (sec == 0 && min > 0) {
            setMinutes(() => min - 1)
            setSeconds(59)
        } else if (min == 0) {
            setHours(() => hr - 1)
            setMinutes(59)
            setSeconds(59)
        }

        if (sec === 0 && min === 0 && hr === 0) {
            alert("Timer is Finished!!")
            clearInterval(tid)
            return
        }
    }


    useEffect(() => {
        let tid;

        if (isStart) {
            tid = setInterval(() => {
                startInterval(seconds, minutes, hours, tid)
            }, 1000);
        }
        setInvervalID(tid);

        return () => {
            clearInterval(tid)
        }
    }, [isStart, hours, minutes, seconds])


    return <>
        <section>
            <h1>CountDown Timer</h1>

            <div className="input_container">

                <input
                    type="text"
                    placeholder="HH"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                />:

                <input
                    type="text"
                    placeholder="MM"
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                />:

                <input
                    type="text"
                    placeholder="SS"
                    value={seconds}
                    onChange={(e) => setSeconds(e.target.value)}
                />

                <button onClick={handleStart}>START</button>

            </div>

            {
                isStart &&
                <div className="output_container">
                    <h1>{hours < 10 ? `0${hours}` : hours}:</h1>
                    <h1>{minutes < 10 ? `0${minutes}` : minutes}:</h1>
                    <h1>{seconds < 10 ? `0${seconds}` : seconds}</h1>

                    <button onClick={handleStop}>STOP</button>
                    <button onClick={handleReset}>RESET</button>
                </div>
            }

        </section>
    </>
};

export default CountDown;