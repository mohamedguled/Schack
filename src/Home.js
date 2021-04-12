import React from 'react'
import { FaNewspaper, FaGraduationCap, FaHammer } from 'react-icons/fa'




import {
    Link,
  } from 'react-router-dom'


export default function Home() {
  
    return (
        <div className="home">
          
     <div>
       <h1>Välkommen!</h1>
     </div>
     
          <div className="button">



          <Link className="link" to="/grunderna">
                <div className="categoryBTN">
                    <FaHammer className="ButtonIcon " />
                    <p className="nomargin">Grunderna</p> 
                </div>
    
            </Link>
         

          
          <Link className="link" to="/lärdig">
                <div className="categoryBTN">
                    <FaGraduationCap className="ButtonIcon" />
                    <p className="nomargin">Lär dig</p> 
                </div>
    
            </Link>    
            
              <Link className="link" to="/historia">
                <div className="categoryBTN">
                    <FaNewspaper className="ButtonIcon" />
                    <p className="nomargin">Historia</p> 
                </div>
    
            </Link>
         
      
          </div>

        </div>
    )
}
