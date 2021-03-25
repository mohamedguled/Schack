import React from 'react'
import Spansk from './assets/spanish.png'
import Queensgambit from './assets/queensgambit.png'
import Engelsk from './assets/english.png'


export default function Öppningar() {
    return (
        <div className="öppningar">
                      <h1 className="opening-type-header">1. e4</h1>
            <div className="opening-type ">
  


<a className="link" href="/ruylopez">
                <div className="opening">
                    <h2 className="">Ruy Lopez</h2>
                    <img className="opening-image" src={Spansk} alt=""></img>
                </div>
                </a>   
              


            </div>

            <h1 className="opening-type-header">1. d4</h1>
            <div className="opening-type ">
            <div className="opening">
                    <h2 className="">Queen's Gambit</h2>
                    <img className="opening-image" src={Queensgambit} alt=""></img>
                </div>
            </div>
            <h1 className="opening-type-header">Andra öppningar</h1>
            <div className="opening-type ">
            <div className="opening">
                    <h2 className="">Engelsk</h2>
                    <img className="opening-image" src={Engelsk} alt=""></img>
                </div>
            </div>

        </div>
    )
}
