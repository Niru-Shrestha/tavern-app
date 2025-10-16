import React from "react";
import "./App.css";
import myImage from "./component/Image/coffeecup-1.png";
import Image from "./component/Image/bagandbean.png";
import ImageMuffin from "./component/Image/muffinandcoffee.png";
import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section>
        {/* Container 1 starts here */}
        <div className="bg-[url('/bgtop.png')] bg-cover">
          <div className="container mx-auto flex items-center justify-evenly my-20 px-4">
            <div className="textArea text-[#895B60] font-serif max-w-lg">
              <p className="">Locally-Owned Coffee Shop Serving Cleveland</p>
              <h1 className="mt-2 mb-2 text-4xl leading-tight">
                Brewing Hope & <br />
                Great Coffee in the <br />
                heart of Buckeye
              </h1>
              <p className="mb-[30px]">
                Once a bar, now a beacon of ambition{" "}
                <strong>
                  {" "}
                  —The Tavern Coffee <br />
                  House{" "}
                </strong>{" "}
                is a unique & ecclectic café revitalizing the Buckeye- <br />
                Shaker neighborhood through{" "}
                <strong> community, careers, </strong> and <br />
                <strong> coffee. </strong> <br /> <br />
                <strong className="">Open 8am – 1pm Monday-Friday </strong>
                <br /> <br />
              </p>
              <NavLink
                to="/orderOnline"
                className="btn1 mr-4 px-6 py-2 border-2 border-[#4b2f32] bg-white text-[#4b2f32] hover:bg-[#4b2f32] hover:text-white rounded transition no-underline"
              >
                Order Ahead →
              </NavLink>
              <NavLink
                to="/fullMenu"
                className="btn2 px-6 py-2 border-2 border-[#4b2f32] bg-[#4b2f32] text-white hover:bg-white hover:text-[#4b2f32] rounded transition no-underline"
              >
                Our Menu →
              </NavLink>

              {/* <button className="btn1 mr-4 px-6 py-2 border-2 border-[#4b2f32] bg-white text-[#4b2f32] hover:bg-[#4b2f32] hover:text-white rounded transition">
                <NavLink className="no-underline" to ="/orderOnline">Order Ahead &#8594;</NavLink>
              </button> */}
              {/* <button className="btn2 px-6 py-2 border-2 border-[#4b2f32] bg-[#4b2f32] text-white hover:bg-white hover:text-[#4b2f32] rounded transition">
                <NavLink
                  className=" "
                  to="/fullMenu">
                  Our Menu &#8594;
                </NavLink>
              </button> */}
            </div>
            <img
              className="homecoffeecup w-2/5"
              src={myImage}
              alt="Coffee Cup"
            />
          </div>

          {/* Bean border image full width */}
          <img
            className="beanborder1 w-full block"
            src="./bean_border-1.png"
            alt=""
          />
        </div>

        {/* Container 2 starts here */}

        <div className="container2 mx-auto flex justify-evenly my-10 px-4">
          <div className="textArea2 max-w-2xl pb-[90px]">
            <h3 className="text-[#A8603D] text-xl mb-2">Featured Special</h3>
            <h1 className=" mb-4 leading-snug">
              Serving up Something for <br /> Everyone.
            </h1>
            <p className="mb-[40px] leading-relaxed text-[white]">
              From bold brews to sweet sips, every drink at The Tavern is
              crafted with care <br />
              and community in mind. Whether you’re grabbing your go-to latte or
              trying <br />
              something new like our signature Humble Mornings Blend, or
              delicious pastries <br />
              from Hunny Bunny Bakery, there’s something on the menu to make
              everyone <br />
              feel at home.
            </p>
            <NavLink
              to="/orderOnline"
              className="btn3 px-[22px] py-[12px] border-2 border-white text-white hover:bg-[#A8603D] hover:text-white rounded transition no-underline"
            >
              Start a Pickup Order →
            </NavLink>

            {/* <button className="btn3 ml-0 px-6 py-2 border-2 border-[white] text-[white] hover:bg-[#A8603D] hover:text-white rounded transition">
              Start a Pickup Order &#8594;
            </button> */}
          </div>
        </div>

        {/* Container 3 starts here */}

        <div className="container3 bg-[url('/bg_coffee.png')] bg-cover  mx-auto flex justify-evenly items-center my-10 px-4 py-10 rounded-lg">
          <img className="beanbag w-1/3" src={Image} alt="BeanBag" />
          <div className="textArea3 bg-[#654749] p-8 rounded-lg max-w-xl text-[white] font-serif">
            <h1 className="text-6xl text-[white] mb-4">
              Grab a Bag of our <br /> Best Brew!
            </h1>
            <br />
            <p className="mb-4 leading-relaxed">
              Take a piece of The Tavern home with you. Every 12oz <br />
              bag of our signature roast fuels more than your morning <br />
              — it powers job training, mentorship, and hope right here <br />
              in Buckeye. <strong> Brew boldly. Give generously. </strong>
            </p>
            <br />
            <hr className="border-t-1 border-[#A78D7D ] w-full my-4" /> <br />
            <h3 className="mb-2">12 oz bag • 17-21 Servings</h3> <br />
            <hr className="border-t-1 border-[#A78D7D ] w-full mb-[16px]" /> <br />
            <NavLink
              to="/orderOnline"
              className="btn4 py-[10px] px-[16px] border-2 border-[#A8603D] text-[white] hover:bg-[#4b2f32] hover:text-white rounded transition no-underline bg-transparent"
            >
              $14 | Order Today →
            </NavLink>
            {/* <button className="btn4 px-4 border-2 border-[#A8603D] text-[white] hover:bg-[#4b2f32] hover:text-white rounded transition">
              <NavLink to="/">$14 | Order Today &#8594;</NavLink>
            </button> */}
          </div>
        </div>

        {/* Container 4 starts here */}
        <div className="container4 bg-[url('/shoprepeat-1.png')] bg-cover bg-center">
          <div className="container4 bg-[url('/shoprepeat-1.png')] bg-cover bg-center flex flex-row items-center justify-between px-10 py-10 max-w-[1200px] mx-auto">
            <div className="textArea4 text-[#895B60] font-serif max-w-lg">
              <p className="">Baked Goods, Pastries, & Sandwiches</p>
              <h1 className="mt-2 mb-2 text-4xl leading-tight">
                Better Together: <br /> Tavern × Hunny Bunny’s <br /> Bakery
              </h1>
              <p className="text-4xl mb-[30px] leading-relaxed">
                Every pastry we serve is handcrafted by Hunny Bunny Bakery, a
                local gem we’re proud to support. It’s a sweet partnership that
                supports local business and builds up Buckeye—one bite at a
                time. It’s more than a treat—it’s a taste of Buckeye’s small
                business spirit, made fresh just for you.
              </p>
              <NavLink
                to="/fullMenu"
                className="btn2 px-6 py-2 border-2 border-[#4b2f32] bg-[#4b2f32] text-white hover:bg-white hover:text-[#4b2f32] rounded transition no-underline"
              >
                Our Menu →
              </NavLink>
              {/* <button className="btn2 px-6 py-2 border-2 border-[#4b2f32] bg-[#4b2f32] text-white hover:bg-white hover:text-[#4b2f32] rounded transition">
                Order Now &#8594;
              </button> */}
            </div>
            <img
              className="muffincoffee w-[800px]"
              src={ImageMuffin}
              alt="Muffin&Coffee"
            />
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Home;
