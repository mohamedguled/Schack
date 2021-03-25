import React from 'react'



import Bonde from './assets/bonde.png'
import Springare from './assets/springare.png'
import Löpare from './assets/löpare.png'
import Torn from './assets/torn.png'
import Drottning from './assets/drottning.png'
import Kung from './assets/kung.png'



export default function Pjäser() {

    return (
        <div className="pjäser">
            <div className="card-container">


            <div className="card-vert">
                <div className="left">
                   <img className="piece-card-image " src={Bonde} alt=""/> 
                </div>
                <div className="card-text">
                    <p className="vert-card-header ">Bonde</p>
                    <p className="vert-card-paragraph">x8</p>
                    </div>
                </div>
                

                <div className="card-vert">
                <div className="left">
                   <img className="piece-card-image " src={Springare} alt=""/> 
                </div>
                <div className="card-text">
                    <p className="vert-card-header ">Springare</p>
                    <p className="vert-card-paragraph">x2</p>
                    </div>
                </div>

                <div className="card-vert">
                <div className="left">
                   <img className="piece-card-image " src={Löpare} alt=""/> 
                </div>
                <div className="card-text">
                    <p className="vert-card-header ">Löpare</p>
                    <p className="vert-card-paragraph">x2</p>
                    </div>
                </div>

                <div className="card-vert">
                <div className="left">
                   <img className="piece-card-image " src={Torn} alt=""/> 
                </div>
                <div className="card-text">
                    <p className="vert-card-header ">Torn</p>
                    <p className="vert-card-paragraph">x2</p>
                    </div>
                </div>

             <div className="card-vert">
                <div className="left">
                   <img className="piece-card-image " src={Drottning} alt=""/> 
                </div>
                <div className="card-text">
                    <p className="vert-card-header ">Drottning</p>
                    <p className="vert-card-paragraph">x1</p>
                    </div>
                </div>


                <div className="card-vert">
                <div className="left">
                   <img className="piece-card-image " src={Kung} alt=""/> 
                </div>
                <div className="card-text">
                    <p className="vert-card-header ">Kung</p>
                    <p className="vert-card-paragraph">x1</p>
                    </div>
                </div>


            </div>
            
        </div>
    )
}
