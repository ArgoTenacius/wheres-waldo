import React, { useEffect, useState } from 'react'
import { Game, Navbar } from './components'
import { db } from './firebase/config'
import { addDoc, collection, getDocs, doc, updateDoc} from 'firebase/firestore'

const App = () => {
  const [rankList, setRankList] = useState([]);
  const usersCollectionRef = collection(db, "ranks");

  const getRankList = async () => {
    const data = await getDocs(usersCollectionRef)
    const rank = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    setRankList(rank);
  }

  useEffect(() => {
    getRankList();
  }, [])

  return (
    <main>
      <Navbar rankList={rankList}/>
      <Game />
    </main>
  )
}

export default App