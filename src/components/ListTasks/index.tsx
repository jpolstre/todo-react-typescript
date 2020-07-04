import React, { useState, useRef, useEffect, useMemo } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../../store/ducks/rootReducer'

import { addTasks, editTasks } from '../../store/ducks/tasks/actions'

import { Task } from '../../store/ducks/tasks/types'

import TaskItem from '../TaskItem'
import Notify from '../Notify'


import { Container, Form, Input, Button } from './styles'


const ListTasks: React.FC = () => {
	const tasks = useSelector((state: AppState) => state.tasks.tasks)

	const notify = useSelector((state: AppState) => state.tasks.notify)
	
	const filter = useSelector((state: AppState) => state.tasks.filter)

	const dispatch = useDispatch()

	const [ inputText, setText ] = useState<string>('')

	const [ labelSave, setLabelSave ] = useState<string>('ADD')

	const [ currentTask, setCurrentTask ] = useState<Task>()

	const inputRef = useRef<HTMLInputElement>(null)
	const ulRef = useRef<HTMLUListElement>(null)



	useEffect(
		() => {
			if (notify) {
				if (notify.color !== 'negative') {
					setText('')
					inputRef.current?.focus()

					if (labelSave === 'SAVE') {
						setLabelSave('ADD')

					
					} 
				}
				const ul = ulRef.current
				if (notify.mesasge === 'Tarea crada con exito' && ul) {
					ul.scrollTo({ top: ul.scrollHeight, behavior: 'smooth' });
				}
				new Notify(notify)
			}
		},
		// eslint-disable-next-line 
		[ notify ]
	)

	// useEffect(() => {
	// 	console.log('scroll');
	// 	const ul = ulRef.current
	// 	if (ul) {
	// 		// setTimeout(() => {
	// 		// console.log(ul);

	// 			ul.scrollTo({top: ul.scrollHeight, behavior: 'smooth'});
	// 		// },1000)
	// 	}
	// }, [tasks, ulRef])

	const filterTasks = useMemo(() => {
		switch (filter) {
			case 'COMPLETED':
				return tasks.filter(task=>task.completed)
			case 'UNCOMPLETED':
				return tasks.filter(task => !task.completed)
			default:
				return tasks
		}
	 },[filter, tasks])

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (labelSave === 'ADD') {
			const newTask: Task = {
				id: new Date().getTime(),

				name: inputText,

				completed: false
			}

			dispatch(addTasks(newTask))

		} else {
			if (currentTask) dispatch(editTasks({...currentTask, name: inputText}))
		}
		
	}

	const editHandler = (task: Task) => {
		setLabelSave('SAVE')
		setText(task.name)
		setCurrentTask(task)
		setTimeout(() => {
			const input = inputRef.current
			if (input) {
				input.selectionStart = input.value.length
				input.selectionEnd = input.value.length
				input.focus()
			}
		},10)

	}

	const cancelHandler = () => {
		setLabelSave('ADD')
		setText('')
		inputRef.current?.focus()
	}

	return (
		<Container>
			<Form onSubmit={(e) => submitHandler(e)} >
				<Input autoFocus type='text' value={inputText} onChange={(e) => setText(e.target.value)} ref={inputRef} />
				<Button type='submit'>{labelSave}</Button>
				<Button type='button' onClick={() =>  cancelHandler()}>Cancel</Button>
			</Form>
			{/* <Separator insets /> */}
			<ul ref={ulRef}>{filterTasks.map((task) => <TaskItem key={task.id} task={task} editHandler={editHandler} />)}</ul>
		</Container>
	)
}

export default ListTasks
