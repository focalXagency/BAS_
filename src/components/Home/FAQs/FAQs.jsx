import SectionHeader from '../SectionHeader/SectionHeader'
import Accordion from './Accordion/Accordion'
import './FAQs.css'

const FAQs = () => {
  const accordionData = [
    {
      id: 1,
      question: `Head line 3`,
      answer: 
      `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad 
      minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
    },
    {
      id: 2,
      question: `Head line 3`,
      answer: 
      `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad 
      minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
    },
    {
      id: 3,
      question: `Head line 3`,
      answer: 
      `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad 
      minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
    },
    {
      id: 4,
      question: `Head line 3`,
      answer: 
      `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad 
      minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
    },
    {
      id: 5,
      question: `Head line 3`,
      answer: 
      `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad 
      minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
    },
    {
      id: 6,
      question: `Head line 3`,
      answer: 
      `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad 
      minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
    },
  ]
  const renderSections = () => {
    return accordionData.map((section) => {
      return <Accordion key={section.id} question={section.question} answer={section.answer} id={section.id}/>
    })
  }
  return (
    <div className='aj-faqs'>
      <SectionHeader title="FAQs" text="Here are the highlight of the repeated questions that we keep on getting" />
      <div className="aj-accordions">
        { renderSections() }
      </div>
    </div>
  )
}

export default FAQs