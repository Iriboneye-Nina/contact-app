import React from 'react'
import Navbar from './components/navbar'
import Body from './components/body'
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactForm from './components/ContactForm'
import AddContactButton from './components/AddContactButton';
function App() {
  return (
    <>
    <Navbar />
    <Body />
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
          <Route path="/ contactform" element={<ContactForm/>} />
      </Routes>
        
    
        
        <AddContactButton />
     
    </Router>
    </>
   
  )
}

export default App










