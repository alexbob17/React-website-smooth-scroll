
import './App.css';
// import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/index';
import SinginPage from './components/Home/singin';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/singin" component={SinginPage} exact></Route>
      </Switch>
       
    </Router>
  );
}

export default App;
