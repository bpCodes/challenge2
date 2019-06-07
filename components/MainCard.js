import React from 'react'
import styled from 'styled-components'



export const Item = styled.div`
  font-size: 1rem;
  border-radius: 10px;
  overflow: hidden;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  border-bottom: 1px solid #164751;
  padding: 0.4em 0;
  margin: 0;
  padding: 0.5em;
  width: 65%;
  border-radius: 10px 10px 0 0;
  background-color: rgba(0, 0, 0, 0.25);
  height: 10vh;
`;
export const Data = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  height: 100%;
`; 
export const Image = styled.img`
  box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.88);
  margin: 1em;
`;
export const ShortText = styled.p`
  padding: 0.5em 0;
`;
export const Span = styled.span`
  margin: 0 0.5em;
  text-decoration: underline;
  cursor: pointer;
`;
export const Description = styled.article`
  text-align: left;
  width: 90%;
  margin: 0 auto;
`;

