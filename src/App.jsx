import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter ,Routes ,Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import FullMenu from './FullMenu'
import OurStory from './OurStory'
import TheDrip from './TheDrip'
import OrderOnline from './OrderOnline'
import Cart from './Cart'
import AppLayout from './component/Layout/AppLayout'
import ProceedToCheckout from './ProceedToCheckOut'
import Login from './Login'

const App =() => {
  const router = createBrowserRouter ([

    {
      path :"/",
      element : <AppLayout />,
      children : [
          {
      path : "",
      element : <Home />
    },
    {
      path : "fullMenu",
      element : <FullMenu />
    },
    {
      path : "ourStory",
      element : <OurStory />
    },
    {
      path : "theDrip",
      element : <TheDrip />
    },
    {
      path : "orderonline",
      element : <OrderOnline />
    },
    {
      path : "cart",
      element : <Cart />
    },
    {
      path : "login",
      element : <Login />
    },
    {
      path : 'proceedtocheckout',
      element : <ProceedToCheckout />
    },
      ]
    },

  ])
  return <RouterProvider router={router} />;
}






// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     // <>
//     //   <BrowserRouter>

//     //       <Routes>
//     //       {/*  <Route path='/' element={ <MainHeader/> } /> */}
//     //         <Route path='/' element={ <Home /> } />
//     //       <Route path='/fullMenu' element={ <FullMenu /> } />
//     //         <Route path='/theDrip' element={ <TheDrip /> } />
//     //         <Route path='/orderOnline' element={ <OrderOnline /> } />
//     //        { /* <Route path='/cart' element={ <Cart /> } />  */ }
//     //       </Routes>

//     //   </BrowserRouter>
//     // </>
//   )
// }

export default App
