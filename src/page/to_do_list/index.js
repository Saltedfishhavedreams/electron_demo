import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { cloneArray } from '../../utils/tools'
import { changeTaskListAction, changCompleteListAction } from '../../store/createAction'

import Title from '../../components/title'
import { ToDoListWrapper } from './style'


export default memo(function ToDoList() {

  // redux hook
  const dispatch = useDispatch()
  const { taskList, completeList } = useSelector(state => {
    return {
      taskList: state.get('taskList'),
      completeList: state.get('completeList')
    }
  }, shallowEqual)

  // handle function
  const handleOperation = (index, flag) => {
    let newTaskList = cloneArray(taskList)
    let completedTask = newTaskList.splice(index, 1)
    if (flag) {
      let newCompleteList = cloneArray(completeList)
      newCompleteList.push(completedTask[0])
      dispatch(changCompleteListAction(newCompleteList))
    }
    dispatch(changeTaskListAction(newTaskList))
  }

  return (
    <ToDoListWrapper>
      <Title title='今日待完成事项' />
      <ul>
        {
          taskList.map((item, index) => {
            return (
              <li key={item.key}>
                <div className='task-info'>
                  <span>{item.taskName}</span>
                  <span className='task-time'>{item.taskTime}</span>
                </div>
                <div className='operation'>
                  <span className='enable-click' onClick={() => handleOperation(index, true)}>完成</span>
                  <span className='enable-click del' onClick={() => handleOperation(index)}>删除</span>
                </div>
              </li>
            )
          })
        }
      </ul>
    </ToDoListWrapper>
  )
})
