import React, { useEffect, useState } from 'react'
import { Navbar } from './components'
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

  /*
  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: "Jane Doe", time: 20})
  }
  */

  useEffect(() => {
    getRankList();
  }, [])

  return (
    <main>
      <Navbar rankList={rankList}/>
    </main>
  )
}

export default App