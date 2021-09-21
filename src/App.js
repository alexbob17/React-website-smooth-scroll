
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
        <Home></Home>
        {/* <Navbar></Navbar> */}
    </Router>
  );
}

export default App;
