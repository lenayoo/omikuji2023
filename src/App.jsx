import './App.css'
import './index.css'
import './assets/fortunecookie'
import { fortuneCookie } from './assets/fortunecookie'
import { useState } from 'react'

function App() {
  const [cookie, setCookie] = useState('')

  function clickHandler() {
    let randomIndex = Math.floor(Math.random() * fortuneCookie.length)
    let randomCookie = fortuneCookie[randomIndex]
    setCookie(randomCookie)
  }

  return (
    <>
      <h1>Find your luck today!</h1>
      <button className="open-omikuji" onClick={clickHandler}>
        Click to see today's luck
      </button>
      <div className="luckybox">
        <h3 className="text-white">Today's your luck is...</h3>
        <div className="line"></div>
        <p key={Math.random()}>{cookie}</p>
      </div>
    </>
  )
}

export default App
