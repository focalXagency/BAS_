import { useState } from 'react'
import './Accordion.css'


const Accordion = ({ question, answer }) => {
  const [visible, setVisible] = useState(false);
  const toggleAccordion = () => {
    setVisible(!visible)
  }
  return (
    <div className='aj-accordion' onClick={toggleAccordion}>
      <div className='aj-acc-header'>
        <p className="aj-acc-text">{question}</p>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="16" 
          viewBox="0 0 20 16" 
          fill="none"
          className={`aj-acc-icon ${visible? "aj-rotate": ""}`}
        >
          <path d="M1.00089 15.4867L19.0009 15.4867C19.1831 15.4861 19.3618 15.4358 19.5176 15.3413C19.6734 15.2468 19.8004 15.1115 19.8851 14.9501C19.9697 14.7887 20.0088 14.6073 19.998 14.4254C19.9872 14.2435 19.927 14.0679 19.8239 13.9177L10.8239 0.917678C10.4509 0.378678 9.55289 0.378678 9.17889 0.917678L0.178894 13.9177C0.0747188 14.0676 0.0136282 14.2432 0.00225919 14.4255C-0.00910977 14.6077 0.0296779 14.7896 0.114408 14.9513C0.199138 15.113 0.32657 15.2484 0.482858 15.3428C0.639146 15.4372 0.818314 15.487 1.00089 15.4867Z" fill="black"/>
        </svg>
      </div>
      <div className={`aj-hidden-box ${visible? 'aj-active-box' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default Accordion
