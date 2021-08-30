import * as actionType from './constans'

import { setItem } from '../utils/storage'

export const changeTaskListAction = (taskList) => {
  setItem('taskList', taskList)
  return {
    type: actionType.CHANGE_TASK_LIST,
    taskList
  }
}

export const changCompleteListAction = (completeList) => {
  setItem('completeList', completeList)
  return {
    type: actionType.CHANGE_COMPLETE_LIST,
    completeList
  }
}
