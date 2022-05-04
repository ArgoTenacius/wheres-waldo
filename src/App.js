import React, { useEffect, useState } from 'react'
import { ApplyRank, Game, Navbar } from './components'
import { db } from './firebase/config'
import { addDoc, collection, getDocs, doc, updateDoc} from 'firebase/firestore'

const App = () => {
  const [rankList, setRankList] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(0);
  const usersCollectionRef = collection(db, "ranks");

  const getRankList = async () => {
    const data = await getDocs(usersCollectionRef)
    const rank = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    setRankList(rank);
  }

  const gameWin = () => {
    setGameOver(true);
  }

  useEffect(() => {
    getRankList();
  }, [])

  return (
    <main>
      <Navbar rankList={rankList} timer={{time, setTime}} gameOver={gameOver}/>
      {gameOver && <ApplyRank time={time}/>}
      <Game gameWin={gameWin}/>
    </main>
  )
}

export default App