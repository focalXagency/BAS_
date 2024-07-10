import './InputText.css';

const InputText = ({label,type,icon}) => {
  return (
    <div className='parent-input'>
    <label className='label'>{label}</label>
    <input className='input' type={type} />
    <div className='input-icon'>
    {icon}
    </div>
</div>
  )
}

export default InputText
