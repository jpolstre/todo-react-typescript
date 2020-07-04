import styled from 'styled-components'

export const Foot = styled.footer`
  grid-area: FO;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: var(--secondary);

  height: 75px;

 > span {
   color: var(--white);
   font-weight: 300;
 }
`

export const Button = styled.button`
  margin-left: 4px;

  padding: 5px;

  border-radius: 4px;

  cursor: pointer;

  font-weight: 500;

  border: 1px solid transparent;

  &.active{
    background-color: var(--focus);
    border: 1px solid  var(--focus);
    box-shadow: 0 0 5px var(--focus);
  }
  &:hover {
    background-color: var(--focus);
    border: 1px solid  var(--focus);
    box-shadow: 0 0 5px var(--focus);
  }

  &:last-child {
    margin-left: none;
  }

`;