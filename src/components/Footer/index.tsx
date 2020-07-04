import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Foot, Button } from './styles'
import { setFilter } from '../../store/ducks/tasks/actions'
import { AppState } from '../../store/ducks/rootReducer'

const Footer: React.FC = () => {
	const dispatch = useDispatch()

	const filter = useSelector((state: AppState) => state.tasks.filter)
	return (
		<Foot>
			<Button onClick={() => dispatch(setFilter('ALL'))} className={filter === 'ALL' ? 'active' : ''}>
				<span>All</span>
			</Button>
			<Button onClick={() => dispatch(setFilter('COMPLETED'))} className={filter === 'COMPLETED' ? 'active' : ''}>
				<span>Completed</span>
			</Button>
			<Button onClick={() => dispatch(setFilter('UNCOMPLETED'))} className={filter === 'UNCOMPLETED' ? 'active' : ''}>
				<span>Uncompleted</span>
			</Button>
		</Foot>
	)
}

export default Footer
