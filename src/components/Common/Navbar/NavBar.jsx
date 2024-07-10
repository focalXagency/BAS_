import { useState } from 'react';
import './NavBar.css'
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = ({ scrollToSection }) => {
  
  const [active, setActive] = useState("aj-sidebar");
  const [overlayActive, setOverlayActive] = useState("aj-overlay");
  const navigate = useNavigate()

  const navToggle = () => {
    active === "aj-sidebar" ? setActive("aj-sidebar aj-sidebar-active") : setActive("aj-sidebar");
    overlayActive === "aj-overlay" ? setOverlayActive("aj-overlay aj-overlay-hidden") : setOverlayActive("aj-overlay");
  }

  const handleLogIn = ()=>{
    navigate("/auth");
  }

  const [navElements] = useState([
    {
      name : "Home",
      active : true, 
      path:"/",
    },
    {
      name : "About Us",
      active : false, 
      id: "about",
    },
    {
      name : "Services",
      active : false, 
      id: "services",
    },
    {
      name : "Case Studies",
      active : false, 
      path:"/case-study"
    },
    {
      name : "Contact Us",
      active : false, 
      id: "contact",
    },
  ])
  
  // Change nav color
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY > 20) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener("scroll", changeColor)

  return (
    <>
      <div className={color ? "aj-navbar aj-navbar-bg" : "aj-navbar"}>
        <div className="aj-logo">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="27" viewBox="0 0 90 27" fill="none">
              <path d="M90.0001 0.263672H68.8223L63.5278 5.55813V9.08586L84.7114 21.4358H63.5278V26.7302H84.7056L90.0001 21.4415V17.908L68.828 5.55813H90.0001V0.263672Z" fill="white"/>
              <path d="M21.1549 10.8526H5.30017V5.55241H21.1549V0.263672H0V26.7359H21.1549L26.4551 21.4072V16.147L21.1549 10.8526ZM21.1549 21.4415H5.30017V16.147H21.1549V21.4415Z" fill="white"/>
              <path d="M26.4723 5.54669V10.8469H21.1721V0.263672L26.4723 5.54669Z" fill="#0033A0"/>
              <path d="M52.9389 0.263672H37.0613L31.7668 5.55241V26.7074H37.0556V16.147H52.9389V26.7302H58.2334V5.57528L52.9389 0.263672ZM52.9389 10.8526H37.0556V5.55241H52.9389V10.8526Z" fill="white"/>
            </svg>
          </a>
        </div>
        <div className="aj-navbar-links">
          <ul className="aj-navbar-menu">
            {
              navElements.map((el, index) => {
                return <li key={index} className='aj-navbar-item'>
                  <NavLink to={el?.path} className={el.active? 'aj-navlink aj-navlink-active' : 'aj-navlink'} onClick={() => scrollToSection(el.id)}>{el.name}</NavLink></li>
              })
            }
          </ul>
        </div>
        <div className="aj-login-btn">
          <button onClick={handleLogIn} >Log In</button>
        </div>
        <div onClick={navToggle} className="aj-navbar-toggler">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
            <path d="M19.9995 8.16663V9.83329C19.9995 10.0543 19.9117 10.2663 19.7554 10.4225C19.5992 10.5788 19.3872 10.6666 19.1662 10.6666H0.832845C0.611831 10.6666 0.39987 10.5788 0.24359 10.4225C0.0873092 10.2663 -0.000488281 10.0543 -0.000488281 9.83329V8.16663C-0.000488281 7.94561 0.0873092 7.73365 0.24359 7.57737C0.39987 7.42109 0.611831 7.33329 0.832845 7.33329H19.1662C19.3872 7.33329 19.5992 7.42109 19.7554 7.57737C19.9117 7.73365 19.9995 7.94561 19.9995 8.16663ZM19.1662 14H0.832845C0.611831 14 0.39987 14.0878 0.24359 14.244C0.0873092 14.4003 -0.000488281 14.6123 -0.000488281 14.8333V16.5C-0.000488281 16.721 0.0873092 16.9329 0.24359 17.0892C0.39987 17.2455 0.611831 17.3333 0.832845 17.3333H19.1662C19.3872 17.3333 19.5992 17.2455 19.7554 17.0892C19.9117 16.9329 19.9995 16.721 19.9995 16.5V14.8333C19.9995 14.6123 19.9117 14.4003 19.7554 14.244C19.5992 14.0878 19.3872 14 19.1662 14ZM19.1662 0.666626H0.832845C0.611831 0.666626 0.39987 0.754424 0.24359 0.910704C0.0873092 1.06698 -0.000488281 1.27895 -0.000488281 1.49996V3.16663C-0.000488281 3.38764 0.0873092 3.5996 0.24359 3.75588C0.39987 3.91216 0.611831 3.99996 0.832845 3.99996H19.1662C19.3872 3.99996 19.5992 3.91216 19.7554 3.75588C19.9117 3.5996 19.9995 3.38764 19.9995 3.16663V1.49996C19.9995 1.27895 19.9117 1.06698 19.7554 0.910704C19.5992 0.754424 19.3872 0.666626 19.1662 0.666626Z" fill="#FFFBFE"/>
          </svg>
        </div>
      </div>
      {/* Sidebar in Mobile */}
      <div className={active}>
        <div className="aj-sidebar-header">
          <div className="aj-sidebar-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="21" viewBox="0 0 70 21" fill="none">
              <path d="M70.0001 0H53.5284L49.4105 4.11791V6.8617L65.8866 16.4672H49.4105V20.5851H65.8822L70.0001 16.4716V13.7234L53.5329 4.11791H70.0001V0Z" fill="white"/>
              <path d="M16.4538 8.23582H4.12236V4.11346H16.4538V0H0V20.5895H16.4538L20.5762 16.445V12.3537L16.4538 8.23582ZM16.4538 16.4716H4.12236V12.3537H16.4538V16.4716Z" fill="white"/>
              <path d="M20.5895 4.10901V8.23137H16.4672V0L20.5895 4.10901Z" fill="#0033A0"/>
              <path d="M41.1747 0H28.8254L24.7075 4.11346V20.5673H28.821V12.3537H41.1747V20.5851H45.2926V4.13125L41.1747 0ZM41.1747 8.23582H28.821V4.11346H41.1747V8.23582Z" fill="white"/>
            </svg>
          </div>
          <div onClick={navToggle} className="aj-sidebar-close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M14.8926 0.750421L9.00004 6.64298L3.10749 0.750421L0.750466 3.10744L6.64302 9L0.750466 14.8926L3.10749 17.2496L9.00004 11.357L14.8926 17.2496L17.2496 14.8926L11.3571 9L17.2496 3.10744L14.8926 0.750421Z" fill="#FFFBFE"/>
            </svg>
          </div>
        </div>
        <ul className="aj-sidebar-menu">
            {
              navElements.map((el, index) => {
                return <li key={index} className={el.active? 'aj-navbar-item aj-sideli-active' : 'aj-navbar-item'}>
                  <NavLink to={el?.path} className={el.active? 'aj-navlink aj-sidelink-active' : 'aj-navlink'} onClick={() => scrollToSection(el.id)}>{el.name}</NavLink></li>
              })
            }
        </ul>
        <div className="aj-sidebar-login">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.0088 1.00772C15.1401 1.04247 15.2752 1.07335 15.4065 1.11582C16.3717 1.4131 17.0241 2.28949 17.0396 3.33576C17.0512 4.29709 17.0473 5.26228 17.0396 6.22746C17.0357 6.68303 16.7076 7.02278 16.2829 7.02664C15.8505 7.0305 15.5146 6.68303 15.5146 6.21588C15.5107 5.28544 15.5146 4.35886 15.5146 3.42842C15.5146 2.83772 15.2057 2.53272 14.6189 2.53272C11.7079 2.53272 8.79686 2.53272 5.88585 2.53272C5.82794 2.53272 5.76617 2.54044 5.65807 2.5443C5.75459 2.60607 5.8125 2.64082 5.86655 2.67171C7.27572 3.48633 8.68104 4.30481 10.0941 5.11171C10.9589 5.60588 11.372 6.32784 11.3681 7.32392C11.3565 10.5747 11.3643 13.8254 11.3643 17.0762C11.3643 17.165 11.3643 17.2538 11.3643 17.3696C11.4492 17.3735 11.5226 17.3812 11.5959 17.3812C12.5997 17.3812 13.6074 17.3812 14.6112 17.3812C15.2057 17.3812 15.5146 17.0646 15.5184 16.4662C15.5184 15.6477 15.5146 14.8292 15.5223 14.0146C15.5262 13.6324 15.7848 13.3274 16.1439 13.2656C16.5068 13.2038 16.8543 13.3853 16.9817 13.7251C17.0241 13.8332 17.0434 13.9528 17.0434 14.0687C17.0473 14.8949 17.055 15.7172 17.0434 16.5434C17.028 17.8638 16.0898 18.8521 14.7695 18.8946C13.7232 18.9255 12.6769 18.9023 11.6307 18.9062C11.5496 18.9062 11.4685 18.9062 11.3643 18.9062C11.3643 19.2575 11.3565 19.5818 11.3643 19.9061C11.399 21.4427 10.0979 22.3461 8.95901 22.2959C8.5768 22.2805 8.22161 22.1724 7.89344 21.9832C6.31439 21.0721 4.73535 20.1687 3.16402 19.2498C2.39959 18.8058 2.00965 18.1225 2.00579 17.2422C1.99807 12.6132 1.99807 7.98411 2.00579 3.3512C2.00579 2.16595 2.79339 1.25867 3.96319 1.03475C3.99022 1.03089 4.01338 1.01158 4.03655 1C7.68882 1.00772 11.3488 1.00772 15.0088 1.00772Z" fill="white"/>
              <path d="M18.4298 9.20034C18.1363 8.91079 17.8893 8.6637 17.6422 8.41275C17.2986 8.06528 17.2754 7.59813 17.5843 7.28541C17.897 6.96882 18.3641 6.98427 18.7116 7.32788C19.3949 8.00737 20.0744 8.68686 20.7539 9.37022C21.1207 9.74085 21.1246 10.1771 20.7578 10.54C20.0783 11.2234 19.3988 11.9029 18.7155 12.5824C18.368 12.9298 17.9047 12.953 17.5881 12.6403C17.2677 12.3237 17.2908 11.8565 17.646 11.4975C17.8815 11.262 18.1132 11.0265 18.3487 10.7871C18.3564 10.7794 18.3564 10.7639 18.368 10.7176C18.2831 10.7176 18.202 10.7176 18.1248 10.7176C16.3797 10.7176 14.6308 10.7176 12.8857 10.7176C12.3645 10.7176 12.0286 10.3972 12.0402 9.93002C12.0518 9.53623 12.3568 9.21965 12.7506 9.20034C12.8278 9.19648 12.9012 9.19648 12.9784 9.19648C14.6964 9.19648 16.4144 9.19648 18.1325 9.19648C18.2136 9.20034 18.2908 9.20034 18.4298 9.20034Z" fill="white"/>
            </svg>
            &nbsp;Log in
          </a>
        </div>
      </div>
      {/* overlay */}
      <div onClick={navToggle} className={overlayActive}></div>
    </>
  )
}

export default NavBar