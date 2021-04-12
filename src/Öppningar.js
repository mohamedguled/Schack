import React from 'react'
import Spansk from './assets/spanish.png'
import Queensgambit from './assets/queensgambit.png'
import Engelsk from './assets/english.png'
import {

    Link,
  
  } from 'react-router-dom'

export default function Öppningar() {
    return (
        <div className="öppningar">
        


<div className="openingscontainer">


<Link className="link" to="/ruylopez">
    
                <div className="opening">
                    <h1 className="opening-type-header">1. e4</h1>
                <div className="openingsection">
                    <h2 className="">Ruy Lopez</h2>
                </div>
                    <img className="opening-image" src={Spansk} alt=""></img>
                </div>
                </Link>   
              


         

   
            
            <Link className="link" to="/ruylopez">
          
            <div className="opening">
            <h1 className="opening-type-header">1. d4</h1>
            <div className="openingsection">
                    <h2 className="">Queen's Gambit</h2>
                    </div>

                    <img className="opening-image" src={Queensgambit} alt=""></img>
                </div>
                </Link>
      
          
            <div className="opening">
            <h1 className="opening-type-header">Andra öppningar</h1>
            <div className="openingsection">
                    <h2 className="">Engelsk</h2>
                    </div>
                    <img className="opening-image" src={Engelsk} alt=""></img>
              
            </div>

        </div>
        </div>
    )
}
