import React, { useState} from 'react'
import Ranks from '../ranks/Ranks';
import { AiOutlineMenu } from 'react-icons/ai'
import './navbar.css'
import Timer from '../timer/Timer';

const Navbar = ({rankList, timer}) => {
  const [isRankOpen, setIsRankOpen] = useState(false);
  
  const openRank = () => {
    isRankOpen === false ? setIsRankOpen(true) : setIsRankOpen(false);
  }

  return (
    <main className='navbar'>
      <AiOutlineMenu onClick={() => openRank()} className='navbar__icon'/>
      <Timer timer={timer}/>
      {isRankOpen && <Ranks rankList={rankList} openRank={openRank} />}
    </main>
  )
}

export default Navbar;