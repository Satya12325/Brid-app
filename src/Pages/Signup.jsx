import React,{useState} from "react";
import "./Signup.css";
import logo from "../Assets/logo/ranera-logo.svg";
import Inputs from "../Components/Inputs";
import {data} from "./db"
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate();
  const [fname,setFname]= useState("");
  const [lname,setLname] = useState("");
  const [email,setEmail] = useState("");
  const [rID,setRid] = useState("");
  const [password,setPassword]=useState("");

  const handleClick = () => {
    if(fname==="" || lname ==="" || email === "" || password === ""){
      alert("please fill all the details")
      return ;
    }
    
      const payload = {
        firstname:fname,
        lastname:lname,
        email:email,
        refrence:rID,
        password:password
      }
      if(data.length === 0){
        data.push(payload);
        navigate("/dashbord")
      }
      else{
        data.pop();
        data.push(payload);
        navigate("/dashbord")
      }
     
  }
  // console.log(fname)
  return (
    <div className="signUppage">
      <div className="left-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div style={{ width: "70%" }}>
          <div className="heading">
            <h3>Registration</h3>
            <h2> Become a partner</h2>
          </div>
          <div className="reg-details">
            <p>
              RAMAERA is the future of upcoming Industrialisation in
              India,aiming presence in all kind of manufacturing sector’s
            </p>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="language">
          <select name="" id="">
            <option value="">English (UK)</option>
          </select>
        </div>

        <div className="form-header">
            <h1>
            Register Individual Account!
            </h1>
            <p>
            For the purpose of industry regulation, your details are required.
            </p>
        </div>

    <div className="input-container">
      <Inputs
      id="fname"
      type="text"
      plchld="First name"
      value={fname}
      handleChange={(e)=>setFname(e.target.value)}
      />
      <Inputs
      type="text"
      plchld="Last name"
      value={lname}
      handleChange={(e)=>setLname(e.target.value)}
      />
      <Inputs
      type="email"
      plchld="Email"
      value={email}
      handleChange={(e)=>setEmail(e.target.value)}
      />
      <Inputs
      type="text"
      plchld="referral-ID"
      value={rID}
      handleChange={(e)=>setRid(e.target.value)}
      />
      <Inputs
      type="password"
      plchld="Password"
      value={password}
      handleChange={(e)=>setPassword(e.target.value)}
      />
      
      <button onClick={handleClick} className="btn">
      Sign Up
      </button>
      
    </div>

      </div>
    </div>
  );
}

export default Signup;
