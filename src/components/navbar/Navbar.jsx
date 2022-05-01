import React, { useState} from 'react'
import Ranks from '../ranks/Ranks';
import './navbar.css'

const Navbar = ({rankList}) => {
  const [isRankOpen, setIsRankOpen] = useState(false);
  
  const openRank = () => {
    isRankOpen === false ? setIsRankOpen(true) : setIsRankOpen(false);
  }

  return (
    <main className='navbar'>
      <button onClick={() => openRank()}>openRank</button>
      {isRankOpen && <Ranks rankList={rankList} />}
    </main>
  )
}

export default Navbar;