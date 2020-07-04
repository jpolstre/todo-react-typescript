import styled from 'styled-components'

interface Props {
  insets?: boolean
}

export const Container = styled.div`
  grid-area: LT;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);

  padding-bottom: 10px;


  min-height: calc(100vh - 130px);

  > ul {
    /* min-height: calc(100vh - 55px - 45px - 75px -20px -10px); */

    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--focus);
      border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
      background-color: var(--secondary);
    }

  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;

  justify-content: start;
  align-items: center;
  
  padding: 10px 0;


  > button {
    margin-left: 4px;
  }
`

export const Separator = styled.div<Props>`
  height: 1px;
  width: ${(props)=>props.insets? '80%': '100%'};

  background-color: var(--white);
  
  margin: 15px 0; 
  opacity: .1;

` 
export const Input = styled.input`
  padding:10px;
  border-radius: 4px;
  
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--primary);
  border: 1px solid transparent;
  
  min-width: 328px;
  

  transition: all 0.3s ease-in-out;
  &:hover, &:focus {
    border: 1px solid var(--focus);
    box-shadow: 0 0 5px var(--focus);
  }
 
`

export const Button = styled.button`
  padding: 12.5px 10px;
  border-radius: 4px;

  background-color: var(--focus);

  font-weight: 500;

  border: 1px solid transparent;

  transition: all 0.3s ease-in-out;

  cursor: pointer;

  &:hover, &:focus {
    border: 1px solid var(--focus);
    box-shadow: 0 0 5px var(--focus);
  }
`