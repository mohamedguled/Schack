import React from 'react'
import { GiBlackBook } from 'react-icons/gi'
import {
    Link,
  } from 'react-router-dom'
export default function Lärdig() {
    return (
        <div className="lärdig">
               <div className="categoryBTN-container">
            <Link className="link" to="/öppningar2">
               <div className="categoryBTN">
                    <GiBlackBook className="ButtonIcon" />
                    <p className="nomargin">Öppningar</p>
               </div>
            </Link>
            </div>
        </div>
    )
}
