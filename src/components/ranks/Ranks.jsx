import React from 'react';
import './ranks.css';
import { AiOutlineMenu } from 'react-icons/ai'

const Ranks = ({rankList, openRank}) => {
    return (
    <section className='rank'>
        <AiOutlineMenu onClick={() => openRank()} className='navbar__icon'/>
        {rankList.map((player) => (
            <>
            <div key={player.id} className='rank__player'>
                <h1 className='rank__player-place'>1.</h1>
                <h2 className='rank__player-name'>{player.name}</h2>
                <h2 className='rank__player-time'>{player.time}s</h2>
            </div>
            <hr />
            </>
        ))}
    </section>
    )
}

export default Ranks