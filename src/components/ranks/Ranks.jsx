import React from 'react';
import './ranks.css';

const Ranks = ({rankList}) => {
    return (
    <section className='rank'>
        {rankList.map((player) => (
            <div key={player.id} className='rank__player'>
                <h1 className='rank__player-place'>1.</h1>
                <h2 className='rank__player-name'>{player.name}</h2>
                <h2 className='rank__player-time'>{player.time}s</h2>
            </div>
        ))}
    </section>
    )
}

export default Ranks