import React from 'react'

const TheDrip = () => {
  return (
    <>
      <div className=" h-[230px] bg-[url('/menubg11.JPG')] bg-cover bg-center text-[white] font-[sans] text-[18px] p-[50px] pl-[180px] ">
        <h1 className="mb-[10px]">The Drip</h1>
        <h4>Pour yourself a cup and catch up on all the stories, tips, and coffee-fueled thoughts we’ve brewed <br />
            up. From drink deep-dives and local features to productivity hacks and cozy vibes, this is where our <br />
            community comes to sip, scroll, and stay inspired.</h4>
      </div>

      {/* Blog container */}
      <div className="bg-[url('/overlaybg.png')] bg-cover bg-center pr-[420px] min-h-screen flex items-center justify-center font-[sans]">

      <div className="flex flex-col-2 lg:flex-row gap-[50px] justify-center items-stretch">
        {/* container1 */}
        <div className="blogContainer1 w-[300px] flex-1 bg-[white] rounded-xl shadow-lg overflow-hidden flex 
                        flex-col transform transition-transform duration-300 " >
          <img src="blog1.jpeg" alt="" className="w-full h-[250px] object-cover mb-[12px]" />
          <h3 className="text-[#895b60] p-[10px]">Why Morning People Have It <br />Made (and How to Fake It...)</h3>
          <p className="text-[#666] mt-[10px] mb-[10px] pl-[10px]">Coffee Culture, Coffee Shop Life</p>
           <p className="text-[#666] pl-[10px] pb-[20px]">Ever wonder what your coffee choice says about <br />
             your vibe? Whether you’re a bold Cold Brew boss <br />
             or a cozy Cappuccino dreamer, your favorite drink <br />
             might be spilling your secrets. Let’s decode your <br />
             go-to order—just for fun.</p>
             <button></button>
        </div>

        {/* container2 */}
        <div className="blogContainer2 flex-1 bg-[white] rounded-xl shadow-lg overflow-hidden 
                        flex flex-col transform transition-transform duration-300">
          <img src="blog2.jpeg" alt="" className="w-full h-[250px] object-cover mb-[12px]" />
          <h3 className="text-[#895b60] p-[10px]">What Your Go To Coffee Order <br /> Says About You</h3>
          <p className="text-[#666] mt-[10px] mb-[10px] pl-[10px]">Coffee Culture</p>
          <p className="text-[#666] pl-[10px] pb-[20px]">
            Ever wonder what your coffee choice says about <br />
            your vibe? Whether you’re a bold Cold Brew boss <br />
            or a cozy Cappuccino dreamer, your favorite drink <br />
            might be spilling your secrets. Let’s decode your <br />
            go-to order—just for fun.
          </p>
          <button></button>
        </div>

      </div>

      </div>
    </>
  )
}

export default TheDrip
