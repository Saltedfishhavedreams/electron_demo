import { Map } from "immutable"

import { getItem } from '../utils/storage'
import * as actionType from './constans'

const defaultState = Map({
  taskList: getItem('taskList') || [],
  completeList: getItem('completeList') || []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_TASK_LIST:
      return state.set('taskList', action.taskList)
    case actionType.CHANGE_COMPLETE_LIST:
      return state.set('completeList', action.completeList)
    default:
      return state
  }
}


export default reducer
