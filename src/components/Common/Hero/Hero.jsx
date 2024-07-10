import './Hero.css'

const Hero = ({title,styleHero,styleTitle,styleText, text, heroImage, info}) => {
  return (
    <div className='aj-hero' style={styleHero}>
      <div className="aj-hero-text" style={styleTitle}>
        <h1>{title}</h1>
        <p style={styleText}>{text}</p>
        <img src={heroImage} alt="hero-image" />
      </div>
      {
        info? <div className="aj-hero-info">
                <div className="aj-info-industry">
                  <p>Industry</p>
                  <p>Fin tech</p>
                </div>
                <div className="aj-info-location">
                  <p>Location</p>
                  <p>UAE</p>
                </div>
              </div> : ""
      }
    </div>
  )
}

export default Hero