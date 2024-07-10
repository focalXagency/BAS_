import './SectionHeader.css'

const SectionHeader = ({title, text, badge}) => {

  return (
    <div className='aj-section-header'>
      <div className='aj-header-title'>
        <span className='aj-header-badge'>{badge}</span>
        <h2>{title}</h2>
      </div>
      <p className='aj-section-text'>{text}</p>
      <p className='aj-mobile-badge'>{badge}</p>
    </div>
  )
}

export default SectionHeader