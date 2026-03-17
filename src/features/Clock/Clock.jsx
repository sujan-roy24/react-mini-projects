import { useEffect, useState } from 'react';
import './Clock.css';


const toDegrees = {
    seconds: (s) => (s / 60) * 360,
    minutes: (m, s) => (m / 60) * 360 + (s / 60) * 6,
    hours: (h, m) => ((h % 12) / 12) * 360 + (m / 60) * 30,
};

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const s = time.getSeconds();
    const m = time.getMinutes();
    const h = time.getHours();

    const hands = [
        { className: 'hand hour', rotation: toDegrees.hours(h, m) },
        { className: 'hand minute', rotation: toDegrees.minutes(m, s) },
        { className: 'hand second', rotation: toDegrees.seconds(s) },
    ];

    return (
        <div className="clock-container">
            <h1>Digital Clock</h1>
            <h2>{time.toLocaleTimeString()}</h2>

            <h1>Analog Clock</h1>
            <div className="clock">
                {hands.map(({ className, rotation }) => (
                    <div
                        key={className}
                        className={className}
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                ))}
                <div className="center-dot" />
            </div>
        </div>
    );
}

export default Clock;