import React from 'react'
import styled, {keyframes} from 'styled-components'

const skBounce = keyframes`
  0%, 100% { 
    transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
  }
`;

export const Spinner = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: 35%;
  left: 45%;
  margin: 100px auto;
`;
export const Bounce = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #36dfc4;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${skBounce} 2s infinite ease-in-out;
  animation-delay: ${props => props.delay};
`;
