import SectionHeader from '../SectionHeader/SectionHeader';
import './Reviews.css'
import Slider from "react-slick";
import vector from './../../../assets/img/Vector.svg'

const Reviews = () => {

  const data = [
    {
      title: "Alaa Darwish",
      titleInfo: "Founder of Focal X agency ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute`",
      img: <img className='aj-main-vector' src={vector} alt="vector" />,
    },
    {
      title: "Alaa Darwish",
      titleInfo: "Founder of Focal X agency ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute`",
      img: <img className='aj-main-vector' src={vector} alt="vector" />,
    },
    {
      title: "Alaa Darwish",
      titleInfo: "Founder of Focal X agency ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute`",
      img: <img className='aj-main-vector' src={vector} alt="vector" />,
    },
    {
      title: "Alaa Darwish",
      titleInfo: "Founder of Focal X agency",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute`",
      img: <img className='aj-main-vector' src={vector} alt="vector" />,
    },
  ]
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
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
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="aj-reviews">
      <SectionHeader title="Reviews" text="Some of your kind words" badge="+33 More" />
      <div className="aj-reviews-slider-container">
        <Slider className="aj-reviews-slider" {...settings}>
          {data.map((item, index) => (
            <div className='aj-reviews-slide' key={index}>
            <img className='aj-main-vector' src={vector} alt="vector" />
            <div className='aj-reviews-slide-content'>
              <div className="aj-reviews-header">
                <h3>{item.title}</h3>
                <p>{item.titleInfo}</p>
              </div>
              <p className="aj-reviews-text">{item.text}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="157" height="24" viewBox="0 0 157 24" fill="none">
                <path d="M148.094 10.5411V13.8081H150.368V17.0496C150.376 17.3393 150.36 17.6517 150.311 17.9016C150.22 18.5063 149.651 19.5357 148.037 19.5357C146.433 19.5357 145.874 18.5063 145.777 17.9016C145.737 17.6517 145.719 17.3393 145.719 17.0496V6.81145C145.719 6.4493 145.743 6.05293 145.819 5.75291C145.93 5.20725 146.409 4.13117 148.025 4.13117C149.722 4.13117 150.146 5.26564 150.243 5.75291C150.307 6.07565 150.311 6.617 150.311 6.617V7.8602H155.898V7.12527C155.898 7.12527 155.923 6.35841 155.856 5.64274C155.436 1.44053 152.006 0.111031 148.075 0.111031C144.135 0.111031 140.776 1.4529 140.286 5.64274C140.242 6.02589 140.175 6.71509 140.175 7.12527V16.5434C140.175 16.9535 140.188 17.2711 140.263 18.0207C140.628 22.1073 144.135 23.5559 148.059 23.5559C152.006 23.5559 155.49 22.1073 155.861 18.0207C155.927 17.2711 155.934 16.9535 155.942 16.5434V10.5411H148.094ZM109.568 0.71365H103.957V17.2858C103.966 17.5746 103.957 17.899 103.908 18.1369C103.791 18.6932 103.324 19.7638 101.776 19.7638C100.248 19.7638 99.7688 18.6932 99.6605 18.1369C99.6044 17.899 99.5973 17.5746 99.6044 17.2858V0.71365H93.9951V16.7715C93.9879 17.1854 94.0201 18.0311 94.0443 18.2526C94.4315 22.4369 97.6977 23.7955 101.776 23.7955C105.862 23.7955 109.127 22.4369 109.521 18.2526C109.552 18.0311 109.593 17.1854 109.568 16.7715V0.71365ZM58.0133 0.71365L55.2143 18.2244L52.4171 0.71365H43.3661L42.8861 23.1149H48.431L48.5811 2.37739L52.3963 23.1149H58.0221L61.8407 2.37739L61.9914 23.1149H67.5503L67.054 0.71365H58.0133ZM24.5023 0.71365L20.3926 23.1149H26.3857L29.4826 2.37739L32.5052 23.1149H38.4567L34.3641 0.71365H24.5023ZM129.178 18.7493L123.953 0.71365H115.72V22.8813H121.167L120.85 4.26866L126.461 22.8813H134.357V0.71365H128.875L129.178 18.7493ZM78.8 6.54365C78.7014 6.10125 78.7299 5.63124 78.7809 5.38559C78.9396 4.66849 79.4168 3.88638 80.7916 3.88638C82.073 3.88638 82.8243 4.69294 82.8243 5.90335V7.27312H88.294V5.71178C88.294 0.885086 84.0082 0.126852 80.9053 0.126852C76.9973 0.126852 73.8057 1.42759 73.2229 5.0594C73.0688 6.04775 73.0306 6.92507 73.2759 8.04459C74.2262 12.573 82.034 13.8867 83.1673 16.7505C83.3673 17.293 83.31 17.9848 83.208 18.3923C83.0382 19.1376 82.5417 19.8872 81.0697 19.8872C79.6891 19.8872 78.8581 19.0859 78.8581 17.878L78.8564 15.7282H72.9691V17.4371C72.9691 22.3889 76.8104 23.8829 80.9477 23.8829C84.9102 23.8829 88.1829 22.5157 88.7079 18.8097C88.9583 16.8949 88.7695 15.6476 88.6689 15.1779C87.7516 10.5333 79.4299 9.1362 78.8 6.54365ZM6.64706 6.48871C6.53966 6.03711 6.56472 5.56048 6.62455 5.31195C6.7761 4.5983 7.25613 3.80239 8.65519 3.80239C9.95282 3.80239 10.7169 4.61671 10.7169 5.8369V7.22336H16.2507V5.64965C16.2507 0.776646 11.8994 0 8.76259 0C4.82181 0 1.6018 1.32087 1.01266 4.97886C0.851417 5.98303 0.823775 6.86639 1.05681 7.99827C2.01743 12.5782 9.9024 13.9025 11.0496 16.8005C11.2644 17.3393 11.1995 18.0311 11.0929 18.4545C10.9109 19.2075 10.4103 19.9678 8.92611 19.9678C7.54016 19.9678 6.71116 19.1526 6.71116 17.9281L6.70346 15.7725H0.75V17.4854C0.75 22.4939 4.64576 24 8.81529 24C12.8239 24 16.1157 22.6207 16.6527 18.8719C16.9196 16.9395 16.7194 15.6819 16.6293 15.2049C15.6929 10.5034 7.27864 9.11089 6.64706 6.48871Z" fill="#1428A0"/>
              </svg>
            </div>
          </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Reviews