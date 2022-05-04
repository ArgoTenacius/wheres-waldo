import React, { useEffect, useState } from 'react'
import { Game, Navbar } from './components'
import { db } from './firebase/config'
import { addDoc, collection, getDocs, doc, updateDoc} from 'firebase/firestore'
import { formatTime } from './util/util'

const App = () => {
  const [rankList, setRankList] = useState([]);
  //const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(0);
  const usersCollectionRef = collection(db, "ranks");

  const getRankList = async () => {
    const data = await getDocs(usersCollectionRef)
    const rank = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    setRankList(rank);
  }

  const gameWin = () => {
    alert(`You found waldo in ${formatTime(time)}`);
  }

  useEffect(() => {
    getRankList();
  }, [])

  return (
    <main>
      <Navbar rankList={rankList} timer={{time, setTime}}/>
      <Game gameWin={gameWin}/>
    </main>
  )
}

export default App