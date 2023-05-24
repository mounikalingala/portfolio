import React from 'react'
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import About from './componets/About';
import Home from './componets/Home';
import Projects from './componets/Projects';
import Contact from './componets/Contact';
import Blogs from './componets/Blogs';
import Navbar from './componets/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/projects' Component={Projects} />
        <Route path='/about' Component={About} />
        <Route path='/blogs' Component={Blogs} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
