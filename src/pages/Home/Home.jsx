
import Hero from '../../components/Common/Hero/Hero'
import './Home.css'
import heroImage from './../../assets/img/Group.svg'
import LatestProjects from '../../components/Home/LatestProjects/LatestProjects'
import Partners from '../../components/Home/Partners/Partners'
import FocalImg from './../../assets/img/focalx.png'
import WorkOutImg from './../../assets/img/workout.png'
import WhatWeDo from '../../components/Home/WhatWeDo/WhatWeDo'
import WhoWeAre from '../../components/Home/WhoWeAre/WhoWeAre'
import Reviews from '../../components/Home/Reviews/Reviews'
import FAQs from '../../components/Home/FAQs/FAQs'
import OurTeam from '../../components/Home/OutTeam/OurTeam'
import ContactUs from '../../components/Home/ContactUs/ContactUs'

const Home = () => {
    return (
        <div className='home'>
            <Hero title="Black Analysis Solution" text="Leave it to us" heroImage={heroImage}/>
            <WhatWeDo />
            <WhoWeAre />
            <LatestProjects imgs={[FocalImg, WorkOutImg]}/>
            <Reviews />
            <FAQs />
            <Partners header={"Partners"} />
            <OurTeam />
            <ContactUs />
        </div>
    )
}

export default Home