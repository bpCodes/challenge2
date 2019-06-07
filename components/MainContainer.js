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
export const Container = styled.main`
         border: none;
         box-shadow: 0px 2px 15px 0 rgba(0, 0, 0, 0.6);
         text-align: center;
         background-color: rgba(0, 0, 0, 0.25);
         box-sizing: border-box;
         display: grid;     
         grid-template-columns: ${props =>
           props.grid === "line"
             ? "1fr"
             : "repeat(auto-fit, minmax(30%, 1fr))"};    
         ${media.desktop`grid-template-columns: ${props =>
           props.grid === "line"
             ? "1fr"
             : "repeat(auto-fit, minmax(30%, 1fr))"};`}
         ${media.tablet`grid-template-columns: ${props =>
           props.grid === "line"
             ? "1fr"
             : "repeat(auto-fit, minmax(45%, 1fr))"};`}
         ${media.phone`grid-template-columns: 1fr;`}
         
         width: 90%;
         margin: 0 auto;
         grid-gap: 1.1rem;
         margin-top: 5%;
         transition: all 1s ease-in-out;
       `;

export const StyledHeadroom = styled.div`
  width: 90%;
  margin: 0px auto;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #071c20;
  ${media.tablet`flex-direction: column`}
  ${media.phone`flex-direction: column;`}
`;



