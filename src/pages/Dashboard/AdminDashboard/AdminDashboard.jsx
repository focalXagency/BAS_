import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './AdminDashboard.css'
import { HiMiniUsers } from 'react-icons/hi2'
import { HiUserAdd } from 'react-icons/hi'
import { IoMail } from 'react-icons/io5'

const AdminDashboard = () => {
  const [navElements, setNavElements] = useState([
    {
      svg : <HiMiniUsers />,
      name : "all users",
      active : true, 
    },
    {
      svg : <HiUserAdd />,
      name : "Add user",
      active : false, 
    },
    {
      svg : <IoMail />,
      name : "Inbox",
      active : false, 
    },
  ])

  const [active, setActive] = useState("aj-dash-sidebar");

  const navToggle = () => {
    active === "aj-dash-sidebar" ? setActive("aj-dash-sidebar aj-dash-sidebar-active") : setActive("aj-dash-sidebar");
  }

  return (
    <div className='aj-admin-dashboard'>
      <Sidebar navItems={navElements} user={false} active={active} toggler={navToggle}/>
      <div className="aj-admin-dash-content">
        <button onClick={navToggle}>Close</button>
      </div>
    </div>
  )
}

export default AdminDashboard