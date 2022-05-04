/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { formatTime } from '../../util/util';

const Timer = ({timer, gameOver}) => {
    let interval;
    useEffect(() => {
      if(!gameOver){
        interval = setInterval(() => {
            timer.setTime((second) => second + 1);
        }, 1000);
      }else{
        clearInterval(interval);
      }

      return () => {
          clearInterval(interval);
      }
    })

  return (
    <h4>{formatTime(timer.time)}</h4>
  )
}

export default Timer