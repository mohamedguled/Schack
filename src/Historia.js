import React from 'react'
import Morphy from './assets/morphy.jpg'
import Stockphoto from './assets/schack.jpg'
import Stockfish from './assets/stockfish.png'
import { Link } from 'react-router-dom'

export default function Historia() {
    return (
        <div className="historia">
            <div className="history-card-container">



            
<Link className="link" to="/schackhistoria">
<div className="history-card history-cards">
                <img className="crop-photo" src={Stockphoto} alt=""></img>
                <h1 className="card-header-white history-header">Schackhistoria</h1>
            </div>

            </Link>
          

<Link className="link" to="/spelare">

            <div className="player-card history-cards">
                <img className="crop-photo" src={Morphy} alt=""></img>
                <h1 className="card-header-white history-header">Spelare</h1>
            </div>
            </Link>

            <div className="modern-chessengines history-cards">
            <img className="crop-photo" src={Stockfish} alt=""></img>
            <h1 className="card-header-white history-header">Modern schack</h1>
            </div>
           
            </div>
        </div>
    )
}
