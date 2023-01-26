const FormInput = ({ type, id, placeholder, defaultValue = '', label = '' }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </>
  )
}

export default FormInput;