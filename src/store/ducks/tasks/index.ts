import { Reducer } from 'redux'

import { ActionTypes, StateTypes, Task } from './types'

const initTasks = (): Task[] => {
  const tasks:Task[] = []
  for (let i = 1; i <= 5; i++){
    tasks.push({ id: i, name: 'task ' + i, completed: false })
  }
  return tasks
}

const INITIAL_STATE: StateTypes = {
  tasks: initTasks(),
  filter: 'ALL',
  notify: null
}


const reducer: Reducer<StateTypes> = (state = INITIAL_STATE, action): StateTypes => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      if (action.task.name.trim() === '' || state.tasks.some(task => task.name.toUpperCase() === action.task.name.toUpperCase())) return { ...state, notify: { color: 'negative', mesasge: 'La tarea Ya existe' } }
      return { ...state, tasks: state.tasks.concat(action.task), notify: { color: 'positive', mesasge: 'Tarea crada con exito' } }
    case ActionTypes.EDIT_TASK:
      const index = state.tasks.findIndex(({ id }) => id === action.task.id)
      if (action.task.name.trim() === '' || index === -1 || state.tasks.some(task => task.name === action.task.name && task.id !== action.task.id))
        return { ...state, notify: { color: 'negative', mesasge: 'La tarea ya existe o no puede ser vacia' } }
      const tasks = [...state.tasks]
      tasks[index] = action.task
      return { ...state, tasks, notify: { color: 'positive', mesasge: 'Tarea editada con exito' } }
    case ActionTypes.DELETE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.id), notify: { color: 'positive', mesasge: 'Tarea eliminada !!!' } }
    case ActionTypes.TOGGLE_COMPLETED:
      const indx = state.tasks.findIndex(({ id }) => id === action.id)
      const t = [...state.tasks]
      t[indx].completed = ! t[indx].completed
      return { ...state, tasks: t }
    case ActionTypes.SET_FILTER:
      return {...state, filter: action.option}
    default://list task por defecto.
      return state
  }
}

export default reducer