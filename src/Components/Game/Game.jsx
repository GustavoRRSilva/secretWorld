import React from 'react'
import './Game.css'
export const Game = ({verifyLetter}) => {
  return (
    <div>
        <h2 className='title'>Game</h2>
        <button onClick = {verifyLetter}> Game over</button>
        </div>
  )
}
