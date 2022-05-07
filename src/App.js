import React, { useState } from 'react'
import { ApplyRank, Game, Navbar } from './components'
import { db } from './firebase/config'
import { addDoc, collection, getDocs} from 'firebase/firestore'

const App = () => {
  const [rankList, setRankList] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(0);
  const usersCollectionRef = collection(db, "ranks");

  const gameReset = () => {
    setGameOver(false);
    setTime(0);
  }

  const getRankList = async () => {
    const data = await getDocs(usersCollectionRef)
    const rank = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    setRankList(rank);
  }

  const addRank = async (name) => {
      if (name.trim().length > 0) {
        gameReset();
        await addDoc(usersCollectionRef, { name: name.trim(), time: time});
      }
  }

  const gameWin = () => {
    setGameOver(true);
  }

  return (
    <main>
      <Navbar rankList={rankList} getRankList={getRankList} timer={{time, setTime}} gameOver={gameOver}/>
      {gameOver && <ApplyRank time={time} addRank={addRank}/>}
      <Game gameWin={gameWin}/>
    </main>
  )
}

export default App