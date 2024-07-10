import './AboutSection.css';

const AboutSection = ({title,details}) => {
  return (
    <div className='about-profile'>
        <h2 className='profile-title'>

            {title}

        </h2>
        <p className='profile-details'>
            {details}
        </p>
      
    </div>
  )
}

export default AboutSection
