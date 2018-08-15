import styled, { css } from 'styled-components';

export const Item = styled.li`
  align-items: center;
  background-color: #efefef;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  margin: 0 0 15px;
  padding: 0 15px;
  transition: opacity ease-in-out .5s;
  will-change: opacity;

  ${({ isDone }) => isDone && css`
    opacity: .5;
    text-decoration: line-through;
  `}
`;

export const Title = styled.label`
  cursor: pointer;
  flex: 1;
  font-size: 16px;
  padding: 15px;
  text-transform: capitalize;
`;

export const Created = styled.span`
  color: #999;
  font-size: 12px;
  margin-left: auto;
`;
