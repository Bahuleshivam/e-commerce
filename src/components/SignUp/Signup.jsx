import React, { useState } from 'react';
import './Signup.css'

import Register_img from '../SignUp/Register.png'
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


export default function Signup() {

     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [error, setError] = useState("")
     const { signUp , logInAnonymously } = useUserAuth();
     const navigate = useNavigate();

  

     const handleSubmit = async (e) =>{
      e.preventDefault();
      setError("")
      try{
          await signUp(email, password)
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
            <img src={Register_img} style={{width :'100%'}} alt="" />

        </div>

        <div className="rightSide">

        

    
    <form onSubmit={handleSubmit}>
      
        <h2>Sign Up</h2>
        {error && <p variant="danger">{error}</p>}
      <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' 
       onChange={ (e)=> setEmail(e.target.value)} />
      <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' 
      onChange={ (e)=> setPassword(e.target.value)} />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
        </MDBCol>
        
      </MDBRow>

      <MDBBtn type='submit' className='mb-2' block>
        Sign in
      </MDBBtn>
      <MDBBtn type='submit' className='mb-2' block onClick={handleGuestLogin}>
        Geust Login
      </MDBBtn>

      <div className='text-center'>
        <p>
        Already have an account?  <Link to='/Login'>log-in</Link>
        </p>
        
      </div>
    </form>
    </div>
    </div>

    </>
  );
}