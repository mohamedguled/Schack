import React from 'react'
import Castle from './assets/castle2.png'
import Enpassant from './assets/swords.png'
import Stalemate from './assets/balance.png'

export default function Regler() {
    return (
        <div className="regler">
                <div className="card-container">
            <div className="card">
                <div className="left">
                   <img className="piece-card-image resize-card-image" src={Castle} alt=""/> 
                </div>
                <div className="card-text">
                    <h1 className="card-header">Rockad </h1>
                    <p className="card-paragraph">Det speciella kung draget</p>
                    
                </div>
            </div>

            <div className="card">
                <div className="left">
                   <img className="piece-card-image resize-card-image" src={Enpassant} alt=""/> 
                </div>
                <div className="card-text">
             

                    <h1 className="card-header">En passant  </h1>
                    <p className="card-paragraph">Det speciella bonde draget</p>
                    
                </div>
            </div>

            <div className="card">
                <div className="left">
                   <img className="piece-card-image resize-card-image" src={Stalemate} alt=""/> 
                </div>
                <div className="card-text">
             

                    <h1 className="card-header">Patt </h1>
                    <p className="card-paragraph">Partiet är remi</p>
                    
                </div>
            </div>
          
            </div>
        </div>
    )
}
