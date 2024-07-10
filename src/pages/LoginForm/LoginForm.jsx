import './LoginForm.css';
import Button from '../../components/Common/Button/Button';
import HeaderForm from '../../components/LoginForm/HeaderForm/HeaderForm';

import InputText from '../../components/Common/InputText/InputText';
import { Link } from 'react-router-dom';



const LoginForm = () => {
  return (

    <div className="app-wrapper">

  <HeaderForm title={"login"} subtitle={"welcome back"} />


    <form className='form-wrapper'>

        <InputText label={"Username"} type={"text"}  />
        <InputText label={"Password"} type={"password"}  />

        <label className="checkbox">
        <input type="checkbox" className="styled-checkbox" />
        Remember Me
        </label>

        <div className='form-btn'>
        <Button title={"Login"}/>
        </div>

    </form>

    <div className='form-footer'>

      <Link className='footer-forgot' to="forget-password">forgot password?</Link>
      <p className='footer-account'>
      Don’t have an account ?
        <a href="#">Contact us</a>
      </p>

    </div> 

    </div>


  )
}

export default LoginForm
