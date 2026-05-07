
import './App.css'
import Navbar from './Component/NavBar/Navbar'
import './index.css'
import Banner from './Component/Homepage/Banner/Banner'
import Players from './Component/Homepage/Players/Players'
import { Suspense } from 'react'

const fetchPlayer = async()=>{

  const res = await fetch("/data.json");
  return res.json();
}

function App() {

  const playerPromise = fetchPlayer(); 


  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Players playerPromise={playerPromise}></Players>

      </Suspense>

    </>
  )
}

export default App
