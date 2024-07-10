import Hero from '../../components/Common/Hero/Hero';
import Partners from '../../components/Home/Partners/Partners';
import heroImage from '../../assets/img/Group 427319036.svg'

import './StudyCase.css';
import CategoryItem from '../../components/StudyCase/CategoryItem/CategoryItem';
import {ProductsData} from './const';
import { useState } from 'react';
import { Fragment } from 'react';
import SweetPagination from "sweetpagination";
const StudyCase = () => {


  const styleTitle ={
    alignItems:'center',
    margin: '0px auto',


  }
  const styleText= {
    fontSize:'1.4rem',
    width:'65%',
    textAlign:'center',
    letterSpacing:'0px'


  }

  const styleHero= {
    paddingLeft:'0rem',
  }


  const [MenuProducts, setMenuProducts] = useState(ProductsData);
  const [currentFilter, setCurrentFilter] = useState('all');

  const filter = (type) => {

    setCurrentFilter(type);

    setMenuProducts(ProductsData.filter((product)=>{
    if(type==="all"){
        return ProductsData;
    }else{
        return product.type ===type;

    }

    }))
}
  return (
    <div className='study-case'>
      
      <Hero title="Case study" styleHero={styleHero} styleTitle={styleTitle} styleText={styleText} text="A specialized business consultancy, committed to supporting businesses of all sizes and industries to achieve their success" heroImage={heroImage}/>
      <Partners header="Our Customers"/>

      <div className='cards-parent'>

      <ul className='cards-menu'>
                    <li className={currentFilter === 'all' ? 'active' : ''} onClick={()=>filter("all")}>All</li>
                    <li className={currentFilter === 'skin care' ? 'active' : ''} onClick={()=>filter("skin care")}>Skin Care</li>
                    <li className={currentFilter === 'conditioner' ? 'active' : ''} onClick={()=>filter("conditioner")}>Conditioners</li>
                    <li className={currentFilter === 'foundation' ? 'active' : ''} onClick={()=>filter("foundation")}>Foundations</li>
      </ul>

      <div className='cards-list-parent'>

      <div className='cards-list' >
                    {
                        MenuProducts.map((item, i)=>(
                        
                          <Fragment key={i}>
                          <CategoryItem title={item.title} type={item.type} supplier={item.suppler} image={item.img}/>
                          </Fragment>

                        ))
                    }
      </div>


      <SweetPagination
        currentPageData={setMenuProducts}
        getData={ProductsData}
        navigation={true}
        dataPerPage={3}
        getStyle={'style-1'}
      />

      </div>


      </div>
    </div>
  )
}

export default StudyCase
