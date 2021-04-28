import React from 'react'

export default function Grafiskprofil() {
    return (
        <div className="Grafiskprofil">
        <h1>Färger</h1>
        <div className="colorboxes">
          <div className="box-container">
            <p className="color-tooltip">Blå</p>
            <div className="colorbox" id="darkblue">
              <p className="light">#282c34</p>
            </div>
          </div>
          <div className="box-container">
            <p className="color-tooltip">Mörkblå</p>
            <div className="colorbox" id="darkerblue">
              <p className="light">#141824</p>
            </div>
          </div>
          <div className="box-container">
            <p className="color-tooltip">Vit</p>
            <div className="colorbox" id="offwhite">
              <p className="dark">#e6e6e6</p>
            </div>
          </div>
        </div>
        <h1>Logotyp</h1>
        <div className="logobox">
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://images.chesscomfiles.com/chess-themes/pieces/wood/150/wn.png"
            alt=""
          />
          <img
            style={{ width: "150px", height: "150px" }}
            src="https://images.chesscomfiles.com/chess-themes/pieces/wood/200/wn.png"
            alt=""
          />
        </div>
        <h1>Typsnitt</h1>
        <div className="">
          <p className="fontrow">
            <span className="fontheader">Font 1:</span>{" "}
            <span className="fonttext">
              <p style={{ margin: "0" }} className="typsnitt1">
                Abc
              </p>{" "}
              <div className="type">
                <p >(ReactJs Standard Font)</p>
              </div>
          
              BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
              "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
            </span>
          </p>
          <p className="fontrow">
            <span className="fontheader">Font 2:</span>{" "}
            <span className="fonttext">
              <p style={{ margin: "0" }} className="typsnitt2">
                Abc
              </p>{" "}
              "Roboto", sans-serif
            </span>
          </p>
        </div>
        </div>
    )
}
