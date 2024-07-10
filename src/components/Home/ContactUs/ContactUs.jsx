import SectionHeader from '../SectionHeader/SectionHeader'
import ContactInput from './ContactInput/ContactInput'
import './ContactUs.css'

const ContactUs = () => {

  return (
    <div className='aj-contact-us' id='contact'>
      <SectionHeader title="Contact Us" text="Fill the form below to start your journey " />
      <form className="aj-contact-us-container">
        {/* === Row === */}
        <div className="aj-contact-email-row">
          <ContactInput 
            title="Services" 
            placeholder="Choose the service you need." 
            svg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M15.6445 6.75H9.39453V0.5H6.89453V6.75H0.644531V9.25H6.89453V15.5H9.39453V9.25H15.6445V6.75Z" fill="#FFFBFE"/>
                  </svg>} 
            type="text"
            />
          <ContactInput 
            title="Name" 
            placeholder="Enter your name"
            type="text"
            />
        </div>
        {/* === Row === */}
        <div className="aj-contact-email-row">
          <ContactInput 
            title="Company name" 
            placeholder="Enter your company name"
            type="text"
            />
          <ContactInput 
            title="Number (optional)" 
            placeholder="Enter your number"
            type="number"
            />
        </div>
        {/* === Row === */}
        <div className="aj-contact-email-row">
          <ContactInput 
            title="E-mail" 
            placeholder="Enter your work E-mail"
            type="email"
            />
          <ContactInput 
            title="Position" 
            placeholder="Enter your position in the company"
            type="text"
            />
        </div>
        <div className="aj-contact-textarea">
          <h3 className="aj-contact-input-title">Message</h3>
            <div className="aj-contact-textarea-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <g clipPath="url(#clip0_177_6198)">
                  <path d="M7.96585 29C6.09803 29 4.23017 28.2892 2.80826 26.8672C-0.0353457 24.023 -0.0350294 19.3961 2.80912 16.5526L17.8031 1.55862C19.8817 -0.519698 23.2632 -0.519381 25.3412 1.55862C26.3592 2.57652 26.914 3.91534 26.914 5.33843C26.914 6.76152 26.3589 8.1003 25.3516 9.10736L11.5171 22.9406L11.3336 23.1045C10.1594 24.2624 8.26233 24.2573 7.09384 23.0894L7.06632 23.0613C6.50431 22.4995 6.19093 21.7437 6.19093 20.9405C6.19093 20.1371 6.50435 19.3812 7.07292 18.8129L14.2592 11.6263C14.539 11.3462 14.993 11.3462 15.2729 11.6263C15.553 11.9062 15.553 12.3601 15.2729 12.6399L8.08684 19.8268C7.78891 20.1248 7.6249 20.5205 7.6249 20.9408C7.6249 21.3611 7.78891 21.7569 8.08684 22.0546L8.11436 22.0828C8.72165 22.6901 9.72125 22.6899 10.3352 22.076L24.3378 8.09393C25.0745 7.35729 25.4802 6.37892 25.4802 5.33866C25.4802 4.29839 25.0745 3.32003 24.3378 2.58339C22.8081 1.05335 20.3364 1.05335 18.8167 2.57281L3.82272 17.5662C1.5377 19.8509 1.53739 23.5687 3.82187 25.8532C6.1072 28.138 9.82508 28.138 12.1095 25.8532L27.1033 10.859C27.3834 10.5788 27.837 10.5788 28.1169 10.859C28.397 11.1388 28.397 11.5927 28.1169 11.8726L13.1232 26.8669C11.7016 28.2888 9.83366 29 7.96585 29Z" fill="#FFFBFE"/>
                </g>
                <defs>
                  <clipPath id="clip0_177_6198">
                    <rect width="29" height="29" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            <textarea name="" id="" placeholder='Enter your message'></textarea>
            </div>
        </div>
        <input type='submit' className='aj-contact-btn' value="Send" />
      </form>
    </div>
  )
}

export default ContactUs