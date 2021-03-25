
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Grunder from './Grunder'
import Pjäser from './Pjäser'
import Historia from './Historia'
import Regler from './Regler'
import Lärdig from './Lärdig'
import Öppningar from './Öppningar'
import Spanish from './Spanish'
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact={true} path="/" component={Home}></Route>
        <Route exact={true} path="/grunderna" component={Grunder}></Route>
        <Route exact={true} path="/pjäser" component={Pjäser}></Route>
        <Route exact={true} path="/historia" component={Historia}></Route>
        <Route exact={true} path="/regler" component={Regler}></Route>
        <Route exact={true} path="/lärdig" component={Lärdig}></Route>
        <Route exact={true} path="/öppningar" component={Öppningar}></Route>
        <Route exact={true} path="/ruylopez" component={Spanish}></Route>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
