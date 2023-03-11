import { SlCheckbox } from '@shoelace-style/shoelace/dist/react';

const FormCheckbox = ({ name, label, onChangeHandler }) => (
  <>
    <SlCheckbox
      size="large"
      id={name}
      name={name}
      onSlChange={onChangeHandler}
    >
      {label}
    </SlCheckbox>
  </>
)

export default FormCheckbox;