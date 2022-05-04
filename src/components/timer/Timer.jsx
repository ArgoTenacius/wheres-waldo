import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [timer, setTimer] = useState(0);

    const formatTime = (time) => {
        const getSeconds = `0${Math.round(time % 60)}`.slice(-2);
        const minutes = `${Math.floor(time / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
      
        return `${getHours}:${getMinutes}:${getSeconds}`;
    }

    let interval;
    useEffect(() => {
        interval = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    })

  return (
    <h4>{formatTime(timer)}</h4>
  )
}

export default Timer