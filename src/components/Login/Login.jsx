import React, { useState } from 'react';
import './Login.css'
import login_img from '../Login/login.png'
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';



export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { logIn,logInAnonymously  } = useUserAuth();

  // let guestEmail = "admin@123"
  // let guestPassword = "12345678"  
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError("")
    try{
        await logIn(email, password)
        navigate('/Profile')
        
    }catch (err) {
        setError(err.message);
    }
   }

   const handleGuestLogin = async (e) => {
    e.preventDefault();
    try {
      await logInAnonymously(); // Call the new anonymous sign-in function
      navigate("/Profile");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>

    <div className="container">
        <div className="leftside">
            <img src={login_img} alt="" className='login-img' />

        </div>
        <div className="rightSide">
    <form onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        {error && <p>{error}</p> }
      <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' 
      onChange={(e)=> setEmail(e.target.value)} />
      <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' 
      onChange={(e)=> setPassword(e.target.value)} />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
        </MDBCol>
        
      </MDBRow>

      <MDBBtn type='submit' className='mb-2' block>
        Sign in
      </MDBBtn>
      <MDBBtn type='submit' className='mb-2' block onClick={handleGuestLogin} >
        Geust Login
      </MDBBtn>

      <div className='text-center'>
        <p>
          Not a member? <Link to='/Signup'>Sign up</Link>
        </p>
        
      </div>
    </form>
    </div>
    </div>

    </>
  );
}