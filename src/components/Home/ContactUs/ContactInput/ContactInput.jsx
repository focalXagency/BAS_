import './ContactInput.css'

const ContactInput = ({ title, placeholder, svg, type }) => {
  return (
    <div className="aj-contact-email">
      <h3 className="aj-contact-input-title">{title}</h3>
      <div className="aj-contact-email-input">
        <input type={type} placeholder={placeholder}/>
        {svg}
      </div>
    </div>
  )
}

export default ContactInput