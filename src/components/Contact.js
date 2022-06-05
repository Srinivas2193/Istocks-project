import React from "react";
import { useState } from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";

export default function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  
  let navigate = useNavigate();

  const onformSubmit =(e)=>{
      e.preventDefault();    

        document.getElementById("name").oninvalid = (e)=>{
          e.target.setCustomValidity("Incorrect name, please enter a valid name!");
        }

        // alert("Your message has been submitted succesfully !");
        navigate("/thankyou");
      const data = {
        name: name,
        email: email,
        mobile: mobile,
        address: address,
        message: message,
        uniqueId:Math.round(Math.random()*100)+"_"+Math.round(Math.random()*100)
      }

      let lsData = localStorage.getItem("contactUsDataList");
      let parseData;
        if(lsData){
            parseData = JSON.parse(lsData);
        }else{
            parseData = [];
        }
      localStorage.setItem("contactUsDataList", JSON.stringify([data,...parseData]));

    //   document.getElementById("name").value = "";
        // console.log(document.forms[0]);
        let formTag = document.forms[0];
        formTag.name.value = "";
        formTag.email.value = "";
        formTag.mobile.value = "";
        formTag.address.value = "";
        formTag.message.value = "";
}
  return (
    <>
      <div className="container ml-20 mb-5">
        <h2 className="text-3xl text-blue-600 my-3">Contact Us</h2>
        <br />

        <form onSubmit={onformSubmit}>
          <label className="block" htmlFor="name">Name</label>
          <input pattern="[A-Za-z]{3,10}" id="name" name="name"className="form-input border-2  px-56 py-3 rounded-full outline-blue-400" type="text" placeholder="enter your name" onChange={(e)=>setName(e.target.value)}/>
          <br />
          <label className="block" htmlFor="email">Email</label>
          <input id="email" name="email" className="form-input border-2  px-56 py-3 rounded-full outline-blue-400" type="email" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)} required/>
          <br />
          <label className="block" htmlFor="mobile">Mobile</label>
          <input  id="mobile" name="mobile" className="form-input border-2  px-56 py-3 rounded-full outline-blue-400" type="number" placeholder="enter your mobile number" onChange={(e)=>setMobile(e.target.value)} required/>
          {/* <br />
          <label className="block" htmlFor="address"> Address </label>
          <textarea id="address" name="address" className="form-input border-2  px-56 py-3 border outline-blue-400" type="text" placeholder="enter your Address" onChange={(e)=>setAddress(e.target.value)} required/> */}
          <br />
          <label className="block" htmlFor="message"> Message </label>
          <textarea id="message" name="message"  style={{textIndent:"10px",width:"49%",overflowY:"scroll"}} className="form-input border-2 py-3 border outline-blue-400" type="text" placeholder="enter your message" onChange={(e)=>setMessage(e.target.value)} required/>
          <br />
          <button className=" bg-blue-600 rounded-md px-4 py-1 text-2xl mb-5 mt-6 text-white font-bold hover:ease-in duration-300"> Submit </button>
          <br />

          {/* <span className="text-center text-blue-500 text-2xl mt-5">
            Thanks for contacting us ...{" "}
          </span> */}
        </form>
      </div>
    </>
  );
}
