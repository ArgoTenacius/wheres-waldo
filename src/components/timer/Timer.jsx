/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { formatTime } from '../../util/util';

const Timer = (timer) => {

    let interval;
    useEffect(() => {
        interval = setInterval(() => {
            timer.timer.setTime((second) => second + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    })

  return (
    <h4>{formatTime(timer.timer.time)}</h4>
  )
}

export default Timer