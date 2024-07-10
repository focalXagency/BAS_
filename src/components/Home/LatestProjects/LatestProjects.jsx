import Slider from 'react-slick';
import SectionHeader from '../SectionHeader/SectionHeader'
import './LatestProjects.css'
  // import pag from './../../../../assets/icons/pagination.svg'
  // import pag2 from './../../../../assets/icons/pagination-disabled.svg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LatestProjects = ({title, titleInfo, text, username, imgs}) => {

  const navigate = useNavigate();

  const handleNavigeDetails = (id)=>{

  navigate("profile-company/myIDToGetInfo")

  }

  const [arr, setArr] = useState([
    {
      title : "Focal X Agency",
      titleInfo : "Service provided: Consultancy",
      text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      username : "Alaa Darwish",
    },
    {
      title : "Work out",
      titleInfo : "Service provided: Public relations",
      text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      username : "CEO name",
    },
  ])

  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: current => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='aj-latest-projects'>
      <SectionHeader title="Latest projects" text="latest projects provided by our company"/>
      <div className="aj-latest-content">
        {
          <div className="aj-latest-info">
          <svg className='aj-large-latest-vector' xmlns="http://www.w3.org/2000/svg" width="510" height="129" viewBox="0 0 510 129" fill="none">
            <path d="M427.394 128.444L-5.61447e-06 128.444L-2.45172e-06 56.0887L427.394 56.0887L427.436 0L510 0L510 56.3389L427.394 128.444Z" fill="#FFFBFE"/>
          </svg>
          <svg className='aj-mobile-latest-vector' xmlns="http://www.w3.org/2000/svg" width="336" height="87" viewBox="0 0 336 87" fill="none">
            <path d="M275 86.5002L0 86.5002L-1.8192e-09 25.9796L275 25.9796L275 -5.01676e-05L336 -5.2834e-05L336 25.9796L275 86.5002Z" fill="#FFFBFE"/>
          </svg>
          <div className="aj-info-container">
            <div className="aj-info-header">
              <p>{arr[currentSlide].title}</p>
              <p>{arr[currentSlide].titleInfo}</p>
            </div>
            <div className="aj-info-content">
              <p>
                {arr[currentSlide].text}
              </p>
            </div>
            <div className="aj-info-footer">
              <div className="aj-info-user-container">
                <div className="aj-info-img">
                  <img src={imgs[currentSlide]} alt="" />
                </div>
                <p className='aj-username'>{arr[currentSlide].username}</p>
              </div>
              <div className='aj-info-view'>
                <div className="aj-info-footer-btn">
                  <button onClick={()=>handleNavigeDetails("id")}>View project</button>{/* event click has parameter to recive object not property => arr[0] and then get id  */}
                </div>
                <div className="aj-info-footer-vector">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                    <path d="M0.573088 1.37562L0.573088 15.6256C0.57354 15.7699 0.613332 15.9113 0.688179 16.0346C0.763025 16.158 0.870093 16.2586 0.997858 16.3256C1.12562 16.3926 1.26925 16.4235 1.41327 16.415C1.55729 16.4065 1.69626 16.3588 1.81521 16.2772L12.1069 9.15216C12.5336 8.85687 12.5336 8.14595 12.1069 7.84987L1.81521 0.724867C1.69651 0.642395 1.55747 0.594032 1.41321 0.585031C1.26895 0.576031 1.12498 0.606738 0.996941 0.673816C0.868904 0.740893 0.7617 0.841777 0.686974 0.965505C0.612248 1.08923 0.57286 1.23107 0.573088 1.37562Z" fill="#FFFBFE"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        }
        <div className="aj-latest-brand">
          <div>
            <Slider {...settings}>
              <div>
                <img src={imgs[0]} alt="" />
              </div>
              <div>
                <img src={imgs[1]} alt="" />
              </div>
            </Slider>
          </div>
          {/* <img src={img} alt="brand img" />
          <div className="aj-pagination">
            <img src={pag} alt="" />
            <img src={pag2} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default LatestProjects



// <div className="aj-latest-info">
//           <svg className='aj-large-latest-vector' xmlns="http://www.w3.org/2000/svg" width="510" height="129" viewBox="0 0 510 129" fill="none">
//             <path d="M427.394 128.444L-5.61447e-06 128.444L-2.45172e-06 56.0887L427.394 56.0887L427.436 0L510 0L510 56.3389L427.394 128.444Z" fill="#FFFBFE"/>
//           </svg>
//           <svg className='aj-mobile-latest-vector' xmlns="http://www.w3.org/2000/svg" width="336" height="87" viewBox="0 0 336 87" fill="none">
//             <path d="M275 86.5002L0 86.5002L-1.8192e-09 25.9796L275 25.9796L275 -5.01676e-05L336 -5.2834e-05L336 25.9796L275 86.5002Z" fill="#FFFBFE"/>
//           </svg>
//           <div className="aj-info-container">
//             <div className="aj-info-header">
//               <p>{arr[0].title}</p>
//               <p>{arr[0].titleInfo}</p>
//             </div>
//             <div className="aj-info-content">
//               <p>
//                 {arr[0].text}
//               </p>
//             </div>
//             <div className="aj-info-footer">
//               <div className="aj-info-user-container">
//                 <div className="aj-info-img">
//                   <img src={imgs[0]} alt="" />
//                 </div>
//                 <p className='aj-username'>{arr[0].username}</p>
//               </div>
//               <div className='aj-info-view'>
//                 <div className="aj-info-footer-btn">
//                   <button onClick={()=>handleNavigeDetails("id")}>View project</button>{/* event click has parameter to recive object not property => arr[0] and then get id  */}
//                 </div>
//                 <div className="aj-info-footer-vector">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
//                     <path d="M0.573088 1.37562L0.573088 15.6256C0.57354 15.7699 0.613332 15.9113 0.688179 16.0346C0.763025 16.158 0.870093 16.2586 0.997858 16.3256C1.12562 16.3926 1.26925 16.4235 1.41327 16.415C1.55729 16.4065 1.69626 16.3588 1.81521 16.2772L12.1069 9.15216C12.5336 8.85687 12.5336 8.14595 12.1069 7.84987L1.81521 0.724867C1.69651 0.642395 1.55747 0.594032 1.41321 0.585031C1.26895 0.576031 1.12498 0.606738 0.996941 0.673816C0.868904 0.740893 0.7617 0.841777 0.686974 0.965505C0.612248 1.08923 0.57286 1.23107 0.573088 1.37562Z" fill="#FFFBFE"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        