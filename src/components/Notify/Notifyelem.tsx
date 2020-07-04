import React, {useRef, useEffect} from 'react'
import { Notify } from '../../store/ducks/tasks/types'

import { Notifystyled, CloseIcon } from './styles'

export interface Props {
	notify: Notify
	// removeNotify: (ele: HTMLDivElement | null)=> void
	// reference: React.RefObject<HTMLDivElement>
}

interface OwnProps {
	removeNotify(id: string): void
	id: string
}

type AllProps = Props & OwnProps 
// reference
const NotifyElem: React.FC<AllProps> = ({ notify, removeNotify, id }) => {
	const containerDiv = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// setTimeout(() => {
			containerDiv.current?.classList.add('show')
		// }, 300)
	}, [containerDiv])


	const handlerRemove = () => {
		// removeNotify(reference.current)
		removeNotify(id)
	}
	return (
		<Notifystyled notify={notify} ref={containerDiv}>
			<span onClick={() => handlerRemove()}>
				<CloseIcon />
			</span>
			<span className="content-notify">{notify.mesasge}</span>
		</Notifystyled>
	)
}

export default NotifyElem
