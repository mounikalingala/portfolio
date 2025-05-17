import React from 'react'
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import About from './componets/About';
import Home from './componets/Home';
import Projects from './componets/Projects';
import Contact from './componets/Contact';
import Skills from './componets/Skills';
import Navbar from './componets/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/projects' Component={Projects} />
        <Route path='/about' Component={About} />
        <Route path='/skills' Component={Skills} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
