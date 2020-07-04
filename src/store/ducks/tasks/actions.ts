import { ActionTypes, Task } from './types'


// export const listTasks = () => ({ type: TasksActionTypes.LIST_TASK })
export const addTasks = (task: Task) => ({ type: ActionTypes.ADD_TASK, task })
export const editTasks = (task: Task) => ({ type: ActionTypes.EDIT_TASK, task })
export const deleteTasks = (id: number) => ({ type: ActionTypes.DELETE_TASK, id })
export const toggleCompleted = (id: number) => ({ type: ActionTypes.TOGGLE_COMPLETED, id })


export const setFilter = (option: string) => ({ type: ActionTypes.SET_FILTER, option })

