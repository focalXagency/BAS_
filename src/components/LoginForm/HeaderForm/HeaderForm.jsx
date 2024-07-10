
import './HeaderForm.css';
import  Logo  from '../../../assets/img/logo.svg';


const HeaderForm = ({title,subtitle}) => {
  return (
    <div className='form-header'>
    <img className='form-logo' src={Logo} alt='logo' />
    <h2  className="form-title">{title}</h2>
    <p className="form-subtitle">{subtitle}</p>
    </div>     
  )
}

export default HeaderForm
