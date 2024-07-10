import InputText from '../../components/Common/InputText/InputText';
import HeaderForm from '../../components/LoginForm/HeaderForm/HeaderForm';
import MailIcon from '../../assets/icons/mail_icon.svg?react'
import './ForgotPasswordForm.css';
import Button from '../../components/Common/Button/Button';

const ForgotPasswordForm = () => {
  return (
    <div className="app-wrapper">

    <HeaderForm title={"Forgot your password?"} subtitle={"Don't worry, we've got your back. Reset your password easily."} />


    <form className='form-wrapper'>

        <InputText label={"Email"} type={"email"} icon={<MailIcon/>} />


        <div className='form-btn'>
        <Button title={"Send"}/>
        </div>

    </form>
 

    </div>
  )
}

export default ForgotPasswordForm
