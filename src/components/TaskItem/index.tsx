import React from 'react'

import { useDispatch } from 'react-redux'
import { Task } from '../../store/ducks/tasks/types'
import { deleteTasks, toggleCompleted } from '../../store/ducks/tasks/actions'

import { TaskLi, Button, IconEdit, IconDelete } from './styles'

export interface Props {
	task: Task
}

interface ActionProps {
	editHandler(task: Task): void
}

type AllProps = Props & ActionProps

const TaskItem: React.FC<AllProps> = ({ task, editHandler }) => {
	const dispatch = useDispatch()

	const deleteHandler = (task: Task) => {
		if (window.confirm('Seguro elimar la tarea \n' + task.name + '?')) dispatch(deleteTasks(task.id))
	}

	return (
		<TaskLi task={task}>
			<div onClick={()=>dispatch(toggleCompleted(task.id))}>
				<input type="checkbox" checked={task.completed} onChange={()=>{return}}/>
				<span>{task.name}</span>
			</div>
			<div>
				<Button onClick={() => editHandler(task)}>
					<IconEdit />
				</Button>
				<Button onClick={() => deleteHandler(task)}>
					<IconDelete />
				</Button>
			</div>
		</TaskLi>
	)
}

export default TaskItem
