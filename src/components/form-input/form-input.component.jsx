import { SlInput } from '@shoelace-style/shoelace/dist/react';

import './form-input.styles.scss';

const FormInput = ({ type, name, placeholder, value = '', label = '', onChangeHandler }) => {
  return (
    <>
      <SlInput
        className="sl-input"
        label={label}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onSlInput={onChangeHandler}
      />
    </>
  )
}

export default FormInput;