// import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


import './App.css'
import NavBar from './nav'
import Footer from './Footer'
import HomePage from './HomePage'
import ShopPage from './ShopPage'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className='blackBackground'>
      <Router>
       <NavBar/>
       <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/shop' element={<ShopPage/>}/>
       </Routes>
       <Footer/>
    </Router>
    </main>
  )
}

export default App
