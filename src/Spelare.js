import React from 'react'
import USA from './assets/USA.svg'
import Cuba from './assets/cuba.svg'

export default function Spelare() {
    return (
        <div className="spelare">

            <div className="playercards">

          
<div className="playercard">
    <div className="playercontainer morphyIMG">
       
        
    </div>     
    
    <p className="playername"> Paul Charles Morphy</p>
    <p className="playerera"><img className="flagsize" src={USA} alt=""></img>1837-1884</p>
</div>
            
<div className="playercard"> 
    <div className="playercontainer capaIMG"></div>
    <p className="playername">José Raúl Capablanca</p>
    <p className="playerera"><img className="flagsize" src={Cuba} alt=""></img>1888-1942</p>
</div>      
            



            </div>


        </div>
    )
}
