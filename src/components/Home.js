import React from "react";
import Cards from "./Cards";
import "./home.css";

export const Home = () => {
  // const myStyle = {
  //   backgroundImage:
  //     "url('https://media.istockphoto.com/photos/businessman-plan-business-growth-and-financial-increase-of-positive-picture-id1361507082')",
  //   height: "100vh",
  //   fontSize: "20px",
  //   backgroundSize: "cover",
  // };

  return (
    <div style={{ width: "100%"}}>
      <div className="mainBodyContainerIMG">
        <img className="bodyContainerIMG" src="https://www.ideyalabs.com/assets/images/sliders/cloud.jpg" alt="bgImg"/>
        <div className='bodyContainer'>
        <div className="flex justify-center items-end" style={{width:"100%",height:"14%"}}>
          <h1 className="text-3xl font-extrabold text-gray-200 hover:text-light ">
            Traders get more with margins and flat brokerage
          </h1>
        </div>
        <div
          className="w-3/5 h-48 m-auto mt-2 border-4 border-gray-100 shadow-box rounded-3xl flex items-center content-center"
          style={{ backgroundColor: "#e7e2e2ba",height:"142px",width:"60%",marginTop:"6px"}}
        >
          <p className="p-4 m-2 text-xl font-semibold mt-7" style={{fontSize:"1rem",padding:"0rem 1rem",margin:"1rem 0rem"}}>
            Welcome back to a new blog of Learn with istox. This blog is about
            the world's most misunderstood Indicator. Relative Strength index
            RSI is an Indicator that almost everyone uses. So most of us would
            have heard the terms Overbought and Oversold. RSI indicates when the
            stock price moves into overbought and oversold zones.
          </p>
        </div>
        <Cards />
        </div>
      </div>
    </div>
  );
};
export default Home;
