import styled from 'styled-components'

import { Edit, DeleteForever } from '@styled-icons/material'

import { Props } from '.'

export const TaskLi = styled.li<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 400px;

  padding: 8px 20px;
  margin: 0 2px 8px 0;

  background-color: var(--quaternary);

  border-radius: 4px;
 
 &:last-child {
  margin: 0 2px 0 0;
 }

 > div:first-child   {
   padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  > span {
    -webkit-user-select: none;
    margin-left: 4px;

    color: var(--white);

    width: 300px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 1rem;
    opacity: .9;
    text-decoration: ${(props) => props.task.completed ? 'line-through' : 'normal'};
    font-style: ${(props) => props.task.completed ? 'italic' : 'normal'};
  }

  > input {
    cursor: pointer;
  }

 
 }`;


export const Button = styled.button`
  padding: 5px;

  border-radius: 50%;
  cursor: pointer;
  background-color: var(--focus);

  border: 1px solid transparent;

  transition: all .3s ease-in-out;


  &:last-child{
    margin-left: 4px;
    background-color: var(--negative);

  }

  &:last-child:hover{
    border: 1px solid var(--negative);
    box-shadow: 0 0 5px var(--negative);

  }

  &:hover {
    border: 1px solid var(--focus);
    box-shadow: 0 0 5px var(--focus);
  }
  
 `;

export const IconDelete = styled(DeleteForever)`
  width: 20px;
  height: 20px;
`;

export const IconEdit = styled(Edit)`
  width: 20px;
  height: 20px;
`;