import React, { useEffect, useRef } from 'react';
import './ranks.css';
import { AiOutlineMenu } from 'react-icons/ai'
import { formatTime } from '../../util/util';

const Ranks = ({rankList, getRankList, openRank}) => {
    const sortByTime = (x, y) => {
        return x.time - y.time;
    }

    const checkClick = (e) => {
        if(e.target.closest('.rank') === null && e.target.closest('.navbar__icon') === null) { openRank() }
    }

    useEffect(() => {
        document.addEventListener('click', checkClick);
        getRankList();

    
        return () => {
          document.removeEventListener('click', checkClick);
        }
    }, [])

    //after all the process sort the rankList
    rankList.sort(sortByTime);
    
    return (
    <section className='rank'>
        <AiOutlineMenu onClick={() => openRank()} className='navbar__icon'/>
        {rankList.map((player, index) => (
            <section key={player.id}>
                <div className='rank__player'>
                    <h1 className='rank__player-place'>{index + 1}.</h1>
                    <h2 className='rank__player-name'>{player.name}</h2>
                    <h2 className='rank__player-time'>{formatTime(player.time)}s</h2>
                </div>
                <hr />
            </section>
        ))}
    </section>
    )
}

export default Ranks