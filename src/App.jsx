import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Route and Routes 
import { Route, Routes } from 'react-router-dom';
// import my page components
import Episodes from './pages/Episodes';
import Home from './pages/Home';
import Characters from './pages/Characters';
// import my components
import Nav from './components/Nav';


function App() {
 
// you need to have <Routes></Routes> (this is plural because it wraps all of the routes)
  // (this is singular because it's describing one) around each <Route />
  // <Route /> has to have the path - which tells us what it will look like in the address bar
  //    and element - which tells us which page or component will load
return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/episodes' element={<Episodes/>} />
        <Route path='/characters' element={<Characters/>} />

      </Routes>
      </div>
  )
}

export default App
