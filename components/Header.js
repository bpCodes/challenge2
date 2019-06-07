import React from 'react'
import styled,{css} from 'styled-components'


const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
export const Search = styled.button`
  width: 90%;
  position: absolute;
  right: 0;
  padding: 1.15rem;
  border: none;
  width: 20%;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0 10px 10px 0;
  transition: all 400ms ease;
  &:hover {
    background-color: #51e163;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0.8rem;
  left: 1rem;
  font-size: 120%;
  color: #607d8b;
  transform-origin: 0 -150%;
  transition: transform 300ms ease;
  pointer-events: none;
`;

export const Button = styled.button`
  display: inline-block;
  background-color: #4d9aa6;
  padding: 1em;
  text-align: center;
  color: black;
  border: none;
  border-radius: 2em;
  margin-left: 1.5rem;
  width: 20%;
  font-size: 1rem;
  cursor: pointer;
  transition: all 400ms ease;
  &:hover {
    box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.36);
    transform: scale(1.1);
  }
  ${media.tablet`
    width: 40%;
    margin-top: 1rem;
    `}
  ${media.phone`width: 40%;`}
`;
export const HeaderItem = styled.div`
  flex: 1;
  position: relative;
  ${media.tablet`width: 80%`}
  ${media.phone`width: 80%;`}
`;

export const Input = styled.input`
  width: 80%;
  padding: 1.5em;
  border-radius: 3rem;
  background-color: #c3d6d9;
  outline: none;
  border: none;
  &:focus ~ label {
    transform: scale(0.6);
    top: 20px;
  }
`;



