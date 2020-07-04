import styled from 'styled-components'

export const Head = styled.header`
  grid-area: HE;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: var(--secondary);

  height:55px;

  > h2 {
    color: var(--white);
  }
`