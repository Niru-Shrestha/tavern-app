import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#392d2f] text-[#FFFFFF] py-[30px] px-[60px] min-h-[200px] ">
        <div className=" footer-container max-w-7xl mx-auto flex flex-wrap justify-between gap-[0px] ">
          {/* Logo Section and its detail */}
          {/* Column 1 */}
          <>
            <div className="column1 flex ">
              <img
                className="h-[300px] ml-[80px]"
                src="whitelogo.png"
                alt="The Tavern Logo"
              />
              {/* Column 2 */}
              <div className="column2 m-[60px]">
                The Tavern Coffee House <br />
                <br /> Naya Baneshwor,Kathmadu <br />
                <br />
                (Opposite to kitsol) <br />
                <br />
                6633951 <br />
                <br /> <strong> Open Monday- Saturday </strong> <br /> 8am-2pm
              </div>
            </div>
          </>

          {/* Column 3: NavLinks Details */}
          <div className=" column3 mt-[40px]   ">
            <h3></h3>
            <ul className=" flex flex-col mt-[10px] list-none gap-[16px]">
              <li>
                <NavLink to="/" className="no-underline text-[white]">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/fullMenu" className="no-underline text-[white]">
                  Our Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/theDrip" className="no-underline text-[white]">
                  Our Story
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/orderOnline"
                  className="no-underline text-[white]"
                >
                  Order
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="no-underline text-[white]">
                  About
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="column4 font-semibold mt-[48px]">
            <ul className="list-none space-y-2">
              <li>Mission</li><br />
              <li>Vision</li><br />
              <li>Values</li><br />
              <li>Pay It Forward</li><br />
              <li>Donate</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <p className="text-sm leading-relaxed mt-[46px]">
              Once a neighborhood bar, now a nonprofit <br />
              coffeehouse, The Tavern is where strong coffee <br />
              fuels stronger careers and the strongest <br />
              community. Join us in transforming Buckeye—one <br />
              cup, one connection at a time.​
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div>
          <div className="mt-[50px] mb-[80px] text-center text-xs text-gray-300 ">
            © {new Date().getFullYear()} The Tavern Coffee House. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
