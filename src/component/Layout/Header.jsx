import React from 'react'
import { NavLink } from 'react-router-dom' 
import { FaShoppingCart, FaUser } from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <header className="sticky font-[] top-0 z-50 bg-white shadow-md">
          <nav className="flex items-center justify-evenly py-8 px-10 ">
               <img src='./tavernlogo.png' alt="Logo" className="h-[150px] cursor-pointer" /> 
            <ul className="flex gap-10 list-none m-0 p-0">
                <li className="font-semibold">
                  <NavLink to='/' 
                      className=" no-underline text-[#4b2f32] text-lg font-medium hover:text-[#895b60] transition">
                      Home
                  </NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to='/fullMenu'
                            className=" no-underline text-[#4b2f32] text-lg font-medium hover:text-[#895b60] transition">
                            Full Menu
                   </NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to='/ourStory'
                            className=" no-underline text-[#4b2f32] text-lg font-medium hover:text-[#895b60] transition">
                            Our Story
                    </NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to='/theDrip'
                            className=" no-underline text-[#4b2f32] text-lg font-medium hover:text-[#895b60] transition">
                            The Drip
                    </NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to='/orderOnline'
                           className=" no-underline text-[#4b2f32] text-lg font-medium hover:text-[#895b60] transition">
                          Online Order
                  </NavLink>
                </li>
                <li className="font-semibold">
                  <NavLink to='/login'
                           className={({ isActive }) =>isActive ? 
                           " flex items-center gap-2 no-underline text-[#895b60] font-medium px-3 py-2 rounded" 
                           : " flex items-center gap-2 no-underline text-[#4b2f32] font-medium px-3 py-2 rounded hover:text-[#895b60]"}>
                            <FaUser size={20} />
                  </NavLink>
                </li> 
                <li className="font-semibold">
                  <NavLink to='/cart'
                           className={({ isActive }) =>isActive ? 
                           " flex items-center gap-2 no-underline text-[#895b60] font-medium px-3 py-2 rounded" 
                           : " flex items-center gap-2 no-underline text-[#4b2f32] font-medium px-3 py-2 rounded hover:text-[#895b60]"}>
                            <FaShoppingCart size={20} />
                  </NavLink>
                </li> 
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Header


