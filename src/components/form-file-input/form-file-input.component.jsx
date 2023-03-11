import './form-file-input.styles.scss';

const FormFileInput = ({ name, children, label = '', onChangeHandler }) => {
  return (
    <>
      {label ? <label className="file-input__label" htmlFor={name}>{label}</label> : ''}
      {children ? children : ''}
      <input
        className="file-input"
        type="file"
        id={name}
        name={name}
        onChange={onChangeHandler}
      />
    </>
  )
}

export default FormFileInput;