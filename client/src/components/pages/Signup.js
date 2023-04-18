import React, { useState } from 'react';
import Navbar from "../Navbar";
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../config/axios';
import '../../styles/Login_Signup.css';
const Signup = () => {
    const Navigate=useNavigate();

    const [formdata,setformdata]=useState({
      name:"" ,
      userType:"",
      email:"",
      password:"",
      confirmPassword:"",
    })
    const handleonChange=(e)=>{
        let val=e.target.value;
        let name=e.target.name;
        setformdata({...formdata,[name]:val})
    }

  const handle = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post('/api/auth/register', formdata);
      alert(res.data.message);
      if (res.status === 201) {
        Navigate('/Login');
      }
      
    } catch (error) {
      const res = error.response;
      alert(res.data.message);
      if (res.status===409) {
        Navigate('/Login');
      }
    }
};
  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="image-container">
        <img src={require("../../assets/loginbg.png")}alt={"Doctor Logo"}></img>
      </div>
    <form className="login-form" onSubmit={handle}>
    <h2>SIGNUP</h2><br></br>
    <label htmlFor="name">Username</label>
    <input type="text" id="name" name="name" value={formdata.name}onChange={handleonChange} placeholder='Enter Username'></input>
    <label htmlFor='userType'>User Type</label>
          <select id='userType' name='userType' value={formdata.userType} onChange={handleonChange}>
            <option value='' disabled defaultValue>Select a user type</option>
            <option value='Recipient'>Recipient</option>
            <option value='Healthcare Professional'>Healthcare Professional</option>
            <option value='Healthcare Facility'>Healthcare Facility</option>
            <option value='Blood Donation Camp'>Blood Donation Camp</option>
          </select>
    <label htmlFor="email">E-mail Address</label>
    <input type="email" id="email" name="email" value={formdata.email}onChange={handleonChange} placeholder='Enter E-mail'></input>
    <label htmlFor="password">Password</label>
    <input type="password" id="passsword" name="password" value={formdata.password}onChange={handleonChange} placeholder='Enter Password'></input>
    <label htmlFor="confirm password">Confirm Password</label>
    <input type="password" id="confirmpassword" name="confirmPassword" value={formdata.confirmPassword}onChange={handleonChange}placeholder='Enter Password Again'></input>
    <div className="button-container">
    <button type='submit' >Submit</button>
    </div>
    <Link to='/login'>Already have an account?Login here.
    </Link>
    </form>
    </div>
    </>
  )
};
export default Signup
