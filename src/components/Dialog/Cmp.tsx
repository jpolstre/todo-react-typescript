import React, { useEffect, useRef, useState } from 'react'

import { EType, IDialog } from '.'

import { Container, Footer, Header, Body, IconCancel, IconOk, IconClose } from './style'

// export interface Props {
// 	dialogProps: IDialog
// }
// export interface ActionProps {
// 	hide: (id: string) => void
// 	cancel: () => void
// 	ok: () => void
// }

const Cmp: React.FC<IDialog> = ({   title, content, type, onOk, onCancel }) => {

	const [ id, setId ] = useState<string>('')

	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {


		const container =  containerRef.current
		if (container) {
			const id = container.parentElement?.id

			if(id) setId(id)
			container.classList.add('show')
			const body  = 	container.querySelector('.body')
			if(body) body.innerHTML = content
				
		}
	}, [content])


	const remove = ()=> {
    console.log('hide', id)
    const element = document.getElementById(id)
		if (element !== null) {
			const child = element.querySelector('.show')
			child?.classList.remove('.show')
			child?.classList.add('hide')
			document.querySelectorAll('.back-cover').forEach( el => el.remove())
      setTimeout(() => {
        // ReactDOM.unmountComponentAtNode(element)
        element.remove()
      }, 300)
    }

  }

	return (
		<Container ref={containerRef}>
			<Header>
				<h3>{title}</h3>
				<IconClose onClick={() => { onCancel(); remove(); }} />
			</Header>
			<Body className="body"> {content}</Body>
			{type === EType.CONFIRM ? (
				<Footer>
					<button onClick={() => {onCancel(); remove();} }>
						<IconCancel />
						<span>Cancel</span>
					</button>
					<button onClick={() => { onOk(); remove()}}>
						<IconOk />
						<span>Ok</span>
					</button>
				</Footer>
			) : (
				''
			)}
		</Container>
	)
}

export default Cmp
