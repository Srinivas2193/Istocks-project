import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

export const Login = (props) => {
  const [userName,setUserName] = useState("");
  const [userPassword,setUserPassword] = useState("");

  let navigate= useNavigate();

// onSubmit localStorage Part
const onSubmit = (event) => {
  event.preventDefault();


  let lsData = localStorage.getItem("userDataList");
  let parseData;
    if(lsData){
        parseData = JSON.parse(lsData);
    }else{
        parseData = [];
    }
    if(parseData!== null && !parseData.length>0){
    }else{
      let i = 0;
      let userUniqueID = "";
        try{
          while(i <= parseData.length){
            // console.log(parseData[i].email);
              if(parseData[i].email === userName && parseData[i].password === userPassword){
                parseData[i].loginStatus = true;
                userUniqueID = parseData[i].uniqueId;
                localStorage.setItem("userDataList",JSON.stringify(parseData));
    
                // props.history.push('/home');
                  navigate('/home');
                  document.getElementById("navBar").style.display = "flex";
                  props.loginPageCall(userUniqueID);
                break;
              }else{
                document.getElementById("navBar").style.display = "none";
              }
            i += 1;
          }
        }catch(err){
          // console.log("error occured: ",err);
          document.getElementsByClassName("errMessage")[0].style.visibility ="visible";
          setTimeout(()=>{
              document.getElementsByClassName("errMessage")[0].style.visibility ="hidden";
          },2500);
        }
    }
};

  return (
    <div className="container ml-20 pt-10">
      <h2 className="mb-5 text-3xl text-blue-700">Login</h2>
      <br />
      <div className="errMessage">
        <p>Incorrect credentials, Please check and try again!</p>
      </div>
      <form onSubmit={onSubmit}>
        <label className="block" htmlFor="userName">Username/Email</label>
        <br />
        <input type="text" name="userName" id="userName" className="px-56 py-3 border-2 border-blue-400 rounded-full bottom-2" onChange={(e)=>{setUserName(e.target.value)}} placeholder="enter your name"/>
        <div className="text-red-500">
        </div>
        <br />
        <label className="block">Password</label>
        <br />
        <input type="password" className="px-56 py-3 border-2 rounded-full form-input outline-blue-400" placeholder="Enter Your Password" onChange={(e)=>setUserPassword(e.target.value)} /> <br/> <br/>
        <button type="submit" className="logIn text-2 font-bold text-white duration-300 bg-blue-600 rounded-md">Login</button>
      </form>

      <br />
      <p style={{marginBottom:"7rem"}} className="text-1xl">If You Don't Have An Account&nbsp;<Link className="text-blue-500" to="/signup"><b>Signup</b></Link></p>
    </div>
  );
};
export default Login;
