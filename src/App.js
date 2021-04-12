import React, { useState } from 'react'
import './style.scss'
import Springare from './assets/knight.png'
import Test from './test'
import Home from './Home'
import Grunder from './Grunder'
import Pjäser from './Pjäser'
import Historia from './Historia'
import Regler from './Regler'
import Lärdig from './Lärdig'
import Öppningar from './Öppningar'
import Öppningar2 from './Öppningar2'
import Spanish from './Spanish'
import Spelare from './Spelare'
import Schackhistoria from './Schackhistoria'
import Morphy from './Morphy'
import error from './Error'
import { BsQuestionCircle } from 'react-icons/bs'
import { MdPhoneInTalk } from 'react-icons/md'
import { RiMailSendFill } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Drawer } from 'antd';
import 'antd/dist/antd.css'
import {
    HashRouter as Router,
    Link,
    Route,
  } from 'react-router-dom'
function App() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="App">
           <Drawer
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer> 

         <Router >
           <div className="navbar">

           
           
              <div className="nav-left">
            <div className="nav-drawer-container">
            
              <GiHamburgerMenu className="burger drawer-btn" onClick={showDrawer} />
            

            </div>
            <Link className="nav-big-a link" to="/">
      <div className="navbar-content">
                <img className="knight" src={Springare} alt=""></img>
                <h1 className="nav-header">Brädspel | Schack</h1>
              </div>
            
            
            </Link>

            </div>
            <nav className="navbar-nav">
                <ul className="navbar-list">
                    <Link className="navlink list-link " to="/"><li className="list-a">Hem</li></Link>
                    <Link className="navlink list-link " to="/grunderna"><li className="list-a">Grunderna</li></Link>
                    <Link className="navlink list-link " to="/lärdig"><li className="list-a">Lär dig</li></Link>
                    <Link className="navlink list-link " to="/historia"><li className="list-a">Historia</li></Link>
                
                    
                   
                </ul>
          </nav>
          <div className="rightnav">
            <BsQuestionCircle className="rightnavIcon" />

          </div>
</div>
        
  
                <Route exact={true} path="/" component={Home}></Route>
                <Route exact={true} path="/grunderna" component={Grunder}></Route>
                <Route exact={true} path="/pjäser" component={Pjäser}></Route>
                <Route exact={true} path="/historia" component={Historia}></Route>
                <Route exact={true} path="/regler" component={Regler}></Route>
                <Route exact={true} path="/lärdig" component={Lärdig}></Route>
                <Route exact={true} path="/öppningar" component={Öppningar}></Route>
                <Route exact={true} path="/ruylopez" component={Spanish}></Route>
                <Route exact={true} path="/spelare" component={Spelare}></Route>
                <Route exact={true} path="/öppningar2" component={Öppningar2}></Route>
                <Route exact={true} path="/test" component={Test}></Route>
                <Route exact={true} path="/schackhistoria" component={Schackhistoria}></Route>
                <Route exact={true} path="/morphy" component={Morphy}></Route>
                <Route exact={true} path="/error" component={error}></Route>
               
        
                <div className="footer">


<div className="left-footer">
<div className="footer-content">
<img className="knight" src={Springare} alt=""></img>
<h1 className="nav-header">Brädspel | Schack</h1>
</div>
<div className="contact-container">
  <p>Kontakta oss</p>
  <MdPhoneInTalk className="smallicon" /> <RiMailSendFill className="smallicon"/>
</div>

</div>

<div className="footerMenu">

<Link to="/" className="navlink list-link nav-p">
    <p >Hem</p>
    </Link>
    <Link to="" className="navlink list-link nav-p">
    <p >Grunderna</p>
    </Link>
    <Link to="" className="navlink list-link nav-p">
    <p >Lär dig</p>
    </Link>
    <Link to="" className="navlink list-link nav-p">
    <p >Historia</p>
    </Link>


</div>

</div>
            
            </Router>
   </div>
  );
}

export default App;
