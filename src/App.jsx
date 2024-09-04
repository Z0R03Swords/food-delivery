// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Cart from './pages/cart/cart'
import PlaceOrder from './pages/PlaceOrder/placeOrder'
import Footer from './components/Footer/Footer'
import Signup from './components/signUp/Signup'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<Signup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/PlaceOrder' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}
export default App
