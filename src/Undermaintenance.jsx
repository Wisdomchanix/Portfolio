import React, { useEffect, useState } from "react";
import "./UnderMaintain.css";

const UnderMaintenance = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 14); // 2 weeks from now
        const difference = targetDate.getTime() - new Date().getTime();

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="maintenance-wrapper">
            <div className="maintenance-card">
                <div className="gear"></div>
                <h1 className="title">We’ll be back soon 🚀</h1>
                <p className="message">
                    Our site is currently undergoing scheduled maintenance. <br />
                    We’ll be live again in just a little while ✨
                </p>

                {/* Countdown Timer */}
                <div className="countdown">
                    <div className="time-box">
                        <span>{timeLeft.days || 0}</span>
                        <small>Days</small>
                    </div>
                    <div className="time-box">
                        <span>{timeLeft.hours || 0}</span>
                        <small>Hours</small>
                    </div>
                    <div className="time-box">
                        <span>{timeLeft.minutes || 0}</span>
                        <small>Minutes</small>
                    </div>
                    <div className="time-box">
                        <span>{timeLeft.seconds || 0}</span>
                        <small>Seconds</small>
                    </div>
                </div>

                <button
                    className="notify-btn"
                    onClick={() => alert("You’ll be notified when we’re back!")}
                >
                    Notify Me
                </button>
            </div>
        </div>
    );
};

export default UnderMaintenance;