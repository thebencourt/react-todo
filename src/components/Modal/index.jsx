import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, ModalWrapper, ModalHeader, Title, Close, ModalBody } from './index.styled';

const Modal = ({ title, handleClose, children }) => (
  <Fragment>
    <Backdrop />
    <ModalWrapper>
      <ModalHeader>
        <Title>
          { title }
        </Title>
        {handleClose && (
          <Close type="button" onClick={handleClose}>
            &times;
          </Close>
        )}
      </ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
    </ModalWrapper>
  </Fragment>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func,
  children: PropTypes.any.isRequired,
};

export default Modal;