import { SlTextarea } from '@shoelace-style/shoelace/dist/react';

import './form-textarea.styles.scss';

const FormTextarea = ({ name, placeholder, helpText, rows = 4, value = '', label = '', onChangeHandler }) => {
  return (
    <>
      <SlTextarea
        className="sl-textarea"
        rows={rows}
        label={label}
        name={name}
        value={value}
        placeholder={placeholder}
        help-text={helpText}
        onSlInput={onChangeHandler}
      />
    </>
  )
}

export default FormTextarea;