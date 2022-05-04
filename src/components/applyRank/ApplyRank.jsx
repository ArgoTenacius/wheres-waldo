import React from 'react'
import { formatTime } from '../../util/util'
import './applyRank.css'

const applyRank = ({time}) => {
  return (
    <main className='applyRank'>
        <section className='applyRank__box'>
            <h1 className='applyRank__box-mensage'>You win! Your time was: {formatTime(time)}</h1>
            <input placeholder='Enter Your Name here!' className='applyRank__box-input'/>
            <button className='applyRank__box-button'>Apply</button>
        </section>
    </main>
  )
}

export default applyRank