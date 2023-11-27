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
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/episodes' element={<Episodes/>} />
        <Route path='/characters/:symbol/' element={<Characters/>} />

      </Routes>
      </div>
  )
}

export default App
