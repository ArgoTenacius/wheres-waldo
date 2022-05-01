import React, { useState} from 'react'
import Ranks from '../ranks/Ranks';
import { AiOutlineMenu } from 'react-icons/ai'
import './navbar.css'

const Navbar = ({rankList}) => {
  const [isRankOpen, setIsRankOpen] = useState(false);
  
  const openRank = () => {
    isRankOpen === false ? setIsRankOpen(true) : setIsRankOpen(false);
  }

  return (
    <main className='navbar'>
      <AiOutlineMenu onClick={() => openRank()} className='navbar__icon'/>
      <h4 className='navbar__timer'>00:00:00</h4>
      {isRankOpen && <Ranks rankList={rankList} openRank={openRank} />}
    </main>
  )
}

export default Navbar;