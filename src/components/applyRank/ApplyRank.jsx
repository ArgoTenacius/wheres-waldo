import React, { useRef } from 'react'
import { formatTime } from '../../util/util'
import './applyRank.css'

const ApplyRank = ({time, addRank}) => {
  const inputValue = useRef('');

  return (
    <main className='applyRank'>
        <section className='applyRank__box'>
            <h1 className='applyRank__box-mensage'>You win! Your time was: {formatTime(time)}</h1>
            <input  ref={inputValue} placeholder='Enter Your Name here!' className='applyRank__box-input' maxLength={14}/>
            <button className='applyRank__box-button' onClick={() => addRank(inputValue.current.value)}>Apply</button>
        </section>
    </main>
  )
}

export default ApplyRank;