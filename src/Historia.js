import React from 'react'
import Morphy from './assets/morphy.jpg'
import Stockphoto from './assets/schack.jpg'
import Stockfish from './assets/stockfish.png'

export default function Historia() {
    return (
        <div className="historia">
            <div className="history-card-container">



            

             <div className="history-card history-cards">
                <img className="crop-photo" src={Stockphoto} alt=""></img>
                <h1 className="card-header-white history-header">Schackhistoria</h1>
            </div>
            <div className="player-card history-cards">
                <img className="crop-photo" src={Morphy} alt=""></img>
                <h1 className="card-header-white history-header">Spelare</h1>
            </div>
            <div className="modern-chessengines history-cards">
            <img className="crop-photo" src={Stockfish} alt=""></img>
            <h1 className="card-header-white history-header">Modern schack</h1>
            </div>
           
            </div>
        </div>
    )
}
