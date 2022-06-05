import React, { useState } from "react";
import "./App.css";
// import {Routes, Route} from 'react-router-dom';
// Importing components....
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import icon from "./assets/images/logo.jpg"
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
// import Header from "./components/HeaderPage.js"
import About from "./components/About";
import Footer from "./components/FooterPage";
import Signup from "./components/Signup";
import Login from "./components/login/Login.js";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ideyaLabsLogo from "./assets/logoes/ideyalabsLogo.png"
import ThankYou from "./components/ThankYou";
function App() {
  const [userFound, setUserFound] = useState(false);

  const loginPageCall = (userUniqueID)=>{
    // setUserFound(value);
    
    let lsData = localStorage.getItem("userDataList");
    let parseData;
      if(lsData){
          parseData = JSON.parse(lsData);
      }else{
          parseData = [];
      }

      for(let i=0; i<parseData.length; i++){
        if(parseData[i].uniqueId === userUniqueID){
          // console.log("Login Status "+ parseData[i].loginStatus);
          setUserFound(parseData[i].loginStatus);
          // console.log(userFound);
        }
      }
  }
  return (
    <>
       <div className="mainContainer">
        <div style={{display:"flex"}}>
          <div className="logoContainer" style={{width:"16%"}}>
            <img src={ideyaLabsLogo} alt="logo" className="logo  h-20 p-2" />
          </div>
          <div className="iStock flex justify-center items-center font-extrabold" style={{height:"70px",width:"90%", paddingRight:"10%"}}>
            <h1 className="text-5xl text-gray-500" style={{fontStyle:"font-family: 'Lato', sans-serif;"}}> <span style={{color:"#eb7524"}}>i</span><span style={{color:"#285d93"}}>Stocks</span></h1>
          </div>
        </div>
        <Navbar/>
        {/* {userFound && userFound?<Home/> :<Login loginPageCall={loginPageCall}/>} */}
         
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login loginPageCall={loginPageCall}/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/feature1" element={<Feature1 />} />
            <Route path="/feature2" element={<Feature2 />} />
            <Route path="/feature3" element={<Feature3 />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="login" element={<Login loginPageCall={loginPageCall}/>} /> */}
            <Route path="/contact" element={<Contact/>} />
            <Route path="/thankyou" element={<ThankYou/>} />
          </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
