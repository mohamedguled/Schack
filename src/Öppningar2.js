import React from 'react'
import { GiChessKing, GiChessQueen, GiChessPawn } from 'react-icons/gi'

import {
    Link,
  } from 'react-router-dom'

export default function Öppningar2() {
    return (
        <div className="öppningar">
             <div className="categoryBTN-container">
             <Link className="link" to="/error">
                <div className="categoryBTN">
                    <GiChessKing className="ButtonIcon" />
                    <p className="nomargin">E4 </p> 
                </div>
            </Link>
            <Link className="link" to="/error">
                <div className="categoryBTN">
                    <GiChessQueen className="ButtonIcon" />
                    <p className="nomargin">D4 </p> 
                </div>
             
            </Link>
            <Link className="link" to="/error">
                <div className="categoryBTN">
                    <GiChessPawn className="ButtonIcon" />
                    <p className="nomargin">Andra </p> 
                </div>
             
            </Link>
             </div>
        </div>
    )
}
