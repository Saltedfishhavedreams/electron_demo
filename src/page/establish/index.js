import React, { memo, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { cloneArray } from '../../utils/tools';
import { changeTaskListAction } from '../../store/createAction'

import Title from '../../components/title'
import { EstablishWrapper } from './style'

export default memo(function Establish(props) {

  // redux hook
  const dispatch = useDispatch()
  const { taskList } = useSelector(state => {
    return {
      taskList: state.get('taskList')
    }
  }, shallowEqual)

  // other hook
  const taskNameRef = useRef()
  const taskTimeRef = useRef()

  // other handle
  const electron = window.electron

  // handle function
  const submitTask = () => {
    if (taskList.length < 9) {
      let obj = {
        taskName: taskNameRef.current.value,
        taskTime: taskTimeRef.current.value,
        key: Date.now()
      }
      let newTaskList = cloneArray(taskList)
      newTaskList.push(obj)

      // 任务建立完成 给主进程发送任务建立完成自定义事件
      if (obj.taskTime && obj.taskTime !== '') {
        electron.ipcRenderer.send('setTimer', obj.taskTime, encodeURIComponent(obj.taskName))
      }

      dispatch(changeTaskListAction(newTaskList))       // 更新最新数据
    }
    props.history.push('/')                           // 任务建立完成返回主页面
  }

  return (
    <EstablishWrapper>
      <Title title='新建任务' />
      <div className='set-task enable-click'>
        <label className='label-name' htmlFor="setTask">设置任务:</label>
        <input ref={taskNameRef} type="text" id='setTask' />
      </div>
      <div className='set-time enable-click'>
        <label className='label-name' htmlFor="setTime">设置时间:</label>
        <input ref={taskTimeRef} type="time" id='setTime' />
      </div>
      <button className='submit-btn enable-click' onClick={() => submitTask()}>确定</button>
    </EstablishWrapper>
  )
})
