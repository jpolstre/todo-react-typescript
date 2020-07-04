import styled from 'styled-components'

import { Cancel, Check, HighlightOff } from '@styled-icons/material'

export const Container = styled.div`
	/* position: absolute;
	top: 30%;
	left: 50%;

	transform: translate(-50%, -50%); */
	z-index: 10;

	min-width: 400px;

	background-color: var(--primary);
	color: var(--white);

	border-radius: 4px;

	opacity: 0;

	transition: all 0.3s ease-in-out;

	&.show {
		opacity: 1;
	}
	&.hide {
		opacity: 0;
	}
`
export const Header = styled.div`
	background-color: var(--secondary);
	display: flex;
	justify-content: space-between;

	padding: 10px 20px;

	user-select: none;
	cursor: move;
`

export const Body = styled.div`
	padding: 20px 20px;
	margin-left: 5px;
`

export const Footer = styled.div`
	display: flex;
	justify-content: flex-end;

	padding: 10px 20px;
	> button {
		padding: 5px 10px;
		border-radius: 4px;

		cursor: pointer;
	}
	> button:last-child {
		margin-left: 8px;
		background-color: var(--negative);
	}

	> button:first-child {
		background-color: var(--focus);
	}

	> button > svg {
		margin-right: 4px;
	}
`

export const IconClose = styled(HighlightOff)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`
export const IconCancel = styled(Cancel)`
 width: 24px;
 height: 24px;
`
export const IconOk = styled(Check)`
 width: 24px;
 height: 24px;
`
