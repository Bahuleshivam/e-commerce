import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { useUserAuth } from './context/UserAuthContext';
import './Profile.css'
import profileLogo from '../components/profile.jpg'
import accountLogo from '../components/account.jpg'


const Profile = () => {
    
   const { user, LogOut  } = useUserAuth();
  const navigate = useNavigate()
  console.log(user)
  const handleLogOut = async () => {
    try{
        await LogOut();
        navigate('/login')
    }catch (err) {
       console.log(err.message)
    }
  }



  return (
    

<div className="accountcontainer">
      
      <div className='account'>
        <div className="profileimage">

      <img src={accountLogo} alt="image" className='profile'/>
        </div>
      <div className="userinfo">

        <h4 className='userHeading'> Welcome <br />  {user.email}</h4>
        <img src={profileLogo} alt="profileicon" className='userIcon' />
        <p className='userEmail'>User Email : {user.email} </p>

        <button onClick={handleLogOut} className="userLogout">Log out</button>
      </div>
      </div>
    </div>


   

    
  );
}

export default Profile;
