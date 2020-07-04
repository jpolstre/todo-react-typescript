import styled from 'styled-components'

import { HighlightOff } from '@styled-icons/material'

import { Props } from './Notifyelem'

export const Notifystyled = styled.div<Props>`
 
  min-height: 35px;

  padding: 10px 20px;

  margin-bottom: 4px;

  background-color: ${(props) => `var(--${props.notify.color})`};
  color: var(--white);

  border-radius: 4px;

  font-weight: 300px;
  font-size: 0.9rem;

  position: relative;

  transition: all 0.3s ease-in-out;

  opacity:0;

  border: 1px solid ${(props) => `var(--${props.notify.color})`};
  box-shadow: 0 0 5px ${(props) => `var(--${props.notify.color})`};
  
  > span:first-child {
    position: absolute;
    top: 1px;
    right: 1px;
  }
  
 > span.content-notify {
  line-height: 35px;
  padding: 5px 0;
 }

 &.show{
  opacity: 1;
 }

 &.hide{
   opacity: 0;
 }
`;

export const CloseIcon = styled(HighlightOff)`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

