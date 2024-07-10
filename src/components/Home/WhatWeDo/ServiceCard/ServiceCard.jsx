import './ServiceCard.css'

const ServiceCard = ({ logo, title, text }) => {
  return (
    <div className='aj-service-card'>
      <div>{logo}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default ServiceCard