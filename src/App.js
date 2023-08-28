import Home from './Components/Home';
import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import Navigation from './Components/Navigation'
import Todos from './Components/Todos'
import Contact from './Components/Contact'
import About from './Components/About'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Todos" element={<Todos />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Contact" element={<Contact />}/>

      </Routes>
      
    </div>
  );
}

export default App;
