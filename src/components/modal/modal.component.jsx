import { SlDialog } from '@shoelace-style/shoelace/dist/react';

import './modal.styles.scss';

const Modal = ({ children, title, isOpen, setIsOpen, className }) => {
  return (
    <>
      <SlDialog
        className={`sl-dialog${className ? ` ${className}` : ''}`}
        label={title}
        open={isOpen}
        onSlAfterHide={() => setIsOpen(false)}
      >
        {children}
      </SlDialog>
    </>
  )
}

export default Modal;