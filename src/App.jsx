import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './assets/global.css';
import { routes } from './routes';
// import Footer from './components/Common/Footer/Footer';
// import NavBar from './components/Common/Navbar/NavBar';


// import Home from './pages/home/home';


function App() {


  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App