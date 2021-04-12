import React from 'react'



const schackhistoriaINFO = [
    {
        Maintitle: "Schackhistoria",
        text1: "En tidig variant av brädspelet schack spelades i norra Indien på 500-talet. Spelet, som kallades caturanga, var ett strategiskt krigsspel. Brädet föreställde ett slagfält och två spelare använde pjäser med olika egenskaper för att utmanövrera varandra och döda motståndarens kung.",
        text2: "Drottningen, som på den tiden kallades minister, fick dock endast flytta ett fält diagonalt i alla riktningar. Löparen, som då kallades elefant, fick å sin sida flytta två fält åt alla sidor och hoppa över andra pjäser.",
        text3: "Från Indien spred spelet sig på 600-talet till Persien, där reglerna utvecklades ytterligare. Perserna införde till exempel att en spelare skulle säga shah eller shah mat (”kung” och ”kungen är död” på persiska) när kungen attackerades.",
        img1: "https://images.bonnier.cloud/files/his/production/2020/03/16114738/skak1.jpg?auto=compress&q=30&fit=max&w=798&fm=webp&ixlib=imgixjs-3.4.2",
        text4: "Brädspelet fördes troligen till Europa på 900-talet av de muslimska morerna. De följande århundradena var spelet ett populärt tidsfördriv vid de europeiska hoven och utvecklades till det vi i dag kallar schack.",
        text5: "Flera av pjäserna fick sina nuvarande pjäser – hästen, tornet och drottningen – och reglerna ändrades för att göra spelet mer dynamiskt och snabbare. Bland annat fick drottningen och löparen mer framträdande roller.",
        text6: "Den första moderna schackturneringen hölls 1851 i London med deltagande av sexton av Europas mest kända spelare. Turneringens vinnare blev Adolf Anderssen från Tyskland.",
        sourceTag: "Källa:",
        source: "https://varldenshistoria.se/kultur/sport/nar-uppfanns-schack"
    }
]


function Schackhistoria() {
    return(
        <div className="schackhistoria">
            {schackhistoriaINFO.map((info) => {
                return(
                    <div className="text-styling">
                        <h1 className="text-styling-text headerbold">{info.Maintitle}</h1>
                        <div className="text-part">
                            <p className="text-styling-text">{info.text1}</p>
                            <p className="text-styling-text">{info.text2}</p>
                            <p className="text-styling-text">{info.text3}</p>
                        </div>
                      
                        <img className="history-img" src={info.img1} alt=""/>
                            <div className="text-part">
                            <p className="text-styling-text">{info.text4}</p>
                            <p className="text-styling-text">{info.text5}</p>
                            <p className="text-styling-text">{info.text6}</p>
                        </div>
                        <div className="source-container">
                        <p className="text-styling-text source-size">{info.sourceTag}</p>
                        <p className="text-styling-text source">{info.source}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
    }


export default Schackhistoria;