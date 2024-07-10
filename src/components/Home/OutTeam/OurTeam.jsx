import Slider from 'react-slick';
import SectionHeader from '../SectionHeader/SectionHeader'
import Img1 from './../../../assets/img/our-team1.png';
import Img2 from './../../../assets/img/our-team2.png';
import Img3 from './../../../assets/img/our-team3.png';
import './OurTeam.css'



const OurTeam = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <div className='aj-our-team'>
      <SectionHeader title="Out Team" />
      <div className='aj-team-slider'>
        <Slider {...settings}>
          <div className='aj-team-slide'>
            <img src={Img1} alt="team-member" />
            <h3 className='aj-member-name'>Louie</h3>
            <p className='aj-member-job'>Graphic Designer</p>
          </div>
          <div className='aj-team-slide'>
            <img src={Img2} alt="team-member" />
            <h3 className='aj-member-name'>Louie</h3>
            <p className='aj-member-job'>Graphic Designer</p>
          </div>
          <div className='aj-team-slide'>
            <img src={Img3} alt="team-member" />
            <h3 className='aj-member-name'>Layla</h3>
            <p className='aj-member-job'>Financial Consultant</p>
          </div>
          <div className='aj-team-slide'>
            <img src={Img1} alt="team-member" />
            <h3 className='aj-member-name'>Adam</h3>
            <p className='aj-member-job'>Public Relation Manager</p>
          </div>
          <div className='aj-team-slide'>
            <img src={Img2} alt="team-member" />
            <h3 className='aj-member-name'>Adam</h3>
            <p className='aj-member-job'>Public Relation Manager</p>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default OurTeam