import React from 'react'

const OurStory = () => {
  return (
    <>
    {/* About us container */}
      <div className="h-[150px] bg-[url('/menubg11.JPG')] bg-cover bg-center">
        <h1 className="ml-[100px] p-[50px] text-[44px] font-[sans] text-[white]">Our Story</h1>
      </div>

      {/* small navbar */}
      <div className="m-[20px] ml-[80px]">
        <ul className="list-none flex gap-[30px] text-[18.5px] text-[#895B60]">
            <li>About Us</li>
            <li>Our Mission</li>
        </ul>
      </div>

      <div className="bg-[#ead4b333] flex p-[80px] gap-[50px]">
        <div className="flex pl-[120px] ">
            <div>
            <img className="max-h-[400px]  " src="before.png" alt="Before Image" />
        </div>
        <div>
            <img className="max-h-[400px]" src="after.png" alt="After Image" />
        </div>
        </div>
        <div className="textAreaStory text-[#392d2f] ">
            <h1>Fueled by a Dream to Revitalize <br /> Buckeye</h1>
            <p className="mt-[30px]">The Tavern Coffeehouse is more than just a place to grab your <br />
               favorite cup of coffee — it’s a story of transformation. What once <br />
               was an old bar in Buckeye (hence the name Tavern)  has been <br />
               repurposed into a non profit coffee shop and a thriving community <br />
               hub through the vision and support of The Meeting Place Church. <br />
               The name “Tavern” is a nod to the building’s roots, but everything <br />
               inside speaks to renewal, purpose, and people.</p>
        </div>
      </div>

      {/* Our Mission container */}
      <div className="bg-[url('/overlaybg.png')] bg-cover bg-center flex justify-evenly pt-[70px] pb-[70px] ">
        <div className="missionText font-[] ">
            <p className="text-[#895B60] text-[20px]">Our Mission</p><br />
            <h1 className="text-[#392d2f] text-[40px] ">Brewing Hope in the heart of <br /> Buckeye</h1> <br />
            <p className="text-[#392d2f] text-[20px]">The Tavern Coffeehouse exists to bring hope back <br />
               to Buckeye through strong coffee, stronger jobs, <br />
               to build the strongest community. We’re here to <br />
               brew change — starting with quality coffee and <br />
               extending into meaningful work opportunities. Our space <br />
               is designed to be a launchpad for local <br />
               growth, a gathering spot for connection, and a <br />
               symbol of what’s possible when hope is reignited <br />
               in a neighborhood.</p>
        </div>
        <div className="">
            <img className="max-h-[500px] " src="13-min.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default OurStory