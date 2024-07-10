import './index.css';
import  NavigateIcon  from '../../assets/icons/navigate_icon.svg?react';
import { Outlet, useNavigate } from 'react-router-dom';
import img from "../../assets/img/main_background_hero.svg";
import img2 from "../../assets/img/Group 427319036.svg"

import { useEffect, useState } from 'react';

const AuthLayout = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  const navigate = useNavigate()

  const handleBackNavigate = ()=>{
    navigate(-1)
  }


 const updateScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 600);
 };

 useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
 }, []);


  return (

    <div className="auth-container">

        <div className='space'>

        </div>

        <Outlet/>


        <div className='arrow-navigation' onClick={handleBackNavigate}>
                <NavigateIcon/>
        </div>

        <img className='auth-img' style={{right: isSmallScreen && '0%'}} src={isSmallScreen ? img2: img} alt='background' />





    </div>



    
  )
}

export default AuthLayout
