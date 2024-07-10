import { Outlet } from "react-router-dom"
import Footer from "../../components/Common/Footer/Footer"
import NavBar from "../../components/Common/Navbar/NavBar"

const MainLayout = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <NavBar scrollToSection={scrollToSection} />
      <Outlet/>
      <Footer />
    </>
  )
}

export default MainLayout
