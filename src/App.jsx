
import React from 'react';
import Navbar from './components/navbar';
import Body from './components/body';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Contact from './components/contact';


const App = () => {
  return (
    <div>
    <Navbar/>
    <Body/>
   <Contact />
    </div>
   
   
  )
   

}

export default App

