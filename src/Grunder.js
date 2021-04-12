import React from 'react'
import { GiRuleBook } from 'react-icons/gi'
import { FaChess } from 'react-icons/fa'
import { GiPuzzle } from 'react-icons/gi'

import {
    Link,
  } from 'react-router-dom'
export default function Grunder() {
    return (
        <div className="grunder">

            <div className="categoryBTN-container">

       
         
            <Link className="link" to="/pjäser">
                <div className="categoryBTN">
                    <FaChess className="ButtonIcon" /> 
                    <p className="nomargin">Pjäser </p> 
                </div>
             
            </Link>

            <Link className="link" to="/regler">
                <div className="categoryBTN">
                    <GiRuleBook className="ButtonIcon" />
                    <p className="nomargin">Regler</p> 
                </div>
    
            </Link>
            <Link className="link" to="/error">
                <div className="categoryBTN">
                    <GiPuzzle className="ButtonIcon" />
                    <p className="nomargin">Taktik</p> 
                </div>

            </Link>
            </div>

        </div>
    )
}
