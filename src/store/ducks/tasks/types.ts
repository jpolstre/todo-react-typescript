
/**actions types */

export enum ActionTypes {
  // LIST_TASK = '@tasks/LIST_TASKS',
  ADD_TASK = '@tasks/ADD_TASK',
  EDIT_TASK = '@tasks/EDIT_TASK',
  DELETE_TASK = '@tasks/DELETE_TASK',
  TOGGLE_COMPLETED = '@tasks/TOGGLE_COMPLETED',
  
  SET_FILTER = '@task/SET_FILTER',
 
}

/**Data types */

export interface Task {
  id: number
  name: string
  completed: boolean
}

export interface Notify {
  mesasge: string
  color: string
  lifeTime?: number

}



/**state types */


export interface StateTypes {
  tasks: Task[]
  filter: string
  notify?: Notify | null
}