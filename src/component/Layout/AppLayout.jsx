import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


const AppLayout = () => {
  // const [cartItems, setCartItems] = useState([]);

  // const addToCart = (item) => {
  //   setCartItems((prev) => [...prev, item]);
  // };

  return (
    <>
      < Header />
      <Outlet  />
      <Footer />
    </>
  )
}

export default AppLayout
