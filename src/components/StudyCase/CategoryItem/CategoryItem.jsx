import './CategoryItem.css';

const CategoryItem = ({title, type, supplier,image}) => {
  return (
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <div className='card-studycase'>
        <div className='card-image'>
            <img src={image} alt='card category' />
            <span className='card-title'>
                {title}
            </span>
        </div>

        <div className='card-info'>
            <span className='card-type'>
                {type}
            </span>

            <span className='card-supplir'>
                {supplier}
            </span>

        </div>
      
    </div>
    </div>
    <div className="flip-card-back">
      <h1>{title}</h1>
      <p>{type}</p>
    </div>
  </div>
</div>
  )
}

export default CategoryItem

/*    
<div className='card-studycase'>
        <div className='card-image'>
            <img src={image} alt='card category' />
            <span className='card-title'>
                {title}
            </span>
        </div>

        <div className='card-info'>
            <span className='card-type'>
                {type}
            </span>

            <span className='card-supplir'>
                {supplier}
            </span>

        </div>
      
    </div>
    */
