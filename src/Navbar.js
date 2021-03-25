import React from 'react'
import Springare from './assets/knight.png'



export default function Navbar() {
    return (
        <div className="navbar">
            <a className="nav-big-link" href="/"><div className="navbar-content">
            <img className="knight" src={Springare} alt=""></img>
            <h1 className="nav-header">Brädspel | Schack</h1>
            </div></a>
          
          <nav className="navbar-nav">
                <ul className="navbar-list">
                    <a className="navlink" href="/"><li className="list-link">Hem</li></a>
                    <a className="navlink" href="/grunderna"><li className="list-link">Grunderna</li></a>
                    <a className="navlink" href="/lärdig"><li className="list-link">Lär dig</li></a>
                    <a className="navlink" href="/historia"><li className="list-link">Historia</li></a>
                </ul>
          </nav>
        </div>
    )
}

