import styled from 'styled-components';

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, .5);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 50;
`;

export const ModalWrapper = styled.div`
  background-color: #fff;
  left: 50%;
  position: fixed;
  width: 60vw;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const ModalHeader = styled.header`
  border-bottom: 1px solid #ddd;
  padding: 15px 77px;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 26px;
  line-height: 1;
  margin: 0;
  padding: 0;
  text-align: center;
`

export const Close = styled.button`
  appearance: none;
  background-color: #e5e5e5;
  border: none;
  bottom: 0;
  cursor: pointer;
  font-size: 30px;
  position: absolute;
  right: 0;
  top: 0;
  width: 62px;
`;

export const ModalBody = styled.div`
  padding: 30px 15px 15px;
`;
