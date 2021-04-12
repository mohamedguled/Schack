

import React from 'react'

const morphyINFO = [ 
    {
        text1: 'Paul Morphy',
        text2: 'Paul Morphy född den 22 juni 1837 i New Orleans, Louisiana, död den 10 juli 1884 i New Orleans, var en amerikansk schackspelare.',
        text3: 'Morphy var sin tids bäste schackspelare. Han har kallats den förste världsmästaren i schack, även om en officiell sådan inte fanns förrän Wilhelm Steinitz förlänades titeln 20 år senare.',
        text4: 'Morphy föddes i New Orleans, Louisiana, USA, och lärde sig spela schack i unga år. Han utbildade sig till advokat men var fortfarande för ung för att få praktisera.',
        text5: 'Efter att ha vunnit amerikanska mästerskapen åkte han till Europa 1858, där han besegrade alla han mötte. Den som ansågs som världens då bäste spelare, Howard Staunton i London, vägrade dock möta honom – som läkare ansåg han sig inte ha tid eller intresse att spela mot underbarnet (Morphy var nyss 21 fyllda). Dessutom invände han då han uppfattade det som att Morphy var en professionell schackspelare, till skillnad från honom själv.',
        text6: 'Morphy åkte tillbaka till USA efter mindre än ett år. Han kallades "världens bäste schackspelare" vid en ceremoni[källa behövs], vilket gjorde honom mycket uppretad. Han hävdade bestämt att schack aldrig varit hans yrke. Han vägrade också att spela schack under resten av sitt liv.',
        text7: 'Det sägs att ingen ville anlita Morphy som advokat eftersom han för alltid var känd som schackspelare. En del spekulerade i att Morphy haft en olycklig kärlekshistoria, då en ung kvinna han attraherades av inte ville gifta sig med en "simpel schackspelare". Morphy levde resten av sitt liv hos sin mor i New Orleans. Han blev alltmer psykiskt sjuk, och ska enligt uppgift ha vandrat upp och ned för gatorna samtidigt som han mumlade olika schackkombinationer. Han dog av hjärnblödning i badkaret efter en långpromenad.',
        text8: 'Hans spel karakteriserades av kombinationer, och han låg långt före sina motståndare i speluppfattning. I USA har hans minne alltid hyllats trots hans korta karriär, då han var en av USA:s första stora hjältar.',
        sourceTag: "Källa:",
        source: "https://varldenshistoria.se/kultur/sport/nar-uppfanns-schack"
    }
]


function Morphy() {
return (

    <div className="schackhistoria">
    {morphyINFO.map((info) => {
        return(
            <div className="text-styling">
               <h1 className="text-styling-text headerbold">{info.text1}</h1>
               <div className="text-part">
                            <p className="text-styling-text">{info.text2}</p>
                            <p className="text-styling-text">{info.text3}</p>
                            <p className="text-styling-text">{info.text4}</p>
                            <p className="text-styling-text">{info.text5}</p>
                            <p className="text-styling-text">{info.text6}</p>
                            <p className="text-styling-text">{info.text7}</p>
                            <p className="text-styling-text">{info.text8}</p>
                        </div>
            </div>
        )
    })}
</div>


)
}

export default Morphy;
