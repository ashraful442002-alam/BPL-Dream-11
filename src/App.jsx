
import './App.css'
import Navbar from './Component/NavBar/Navbar'
import './index.css'
import Banner from './Component/Homepage/Banner/Banner'
import Players from './Component/Homepage/Players/Players'
import { Suspense } from 'react'
import {  useState } from 'react'

const fetchPlayer = async()=>{

  const res = await fetch("/data.json");
  return res.json();
}

function App() {

  const playerPromise = fetchPlayer(); 
  const [coins, setCoins]= useState(50000);


  return (
    <>
      
      <Navbar coins={coins} ></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Players playerPromise={playerPromise} setCoins={setCoins} coins={coins}></Players>

      </Suspense>

    </>
  )
}

export default App
