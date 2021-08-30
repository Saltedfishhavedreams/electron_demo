import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { getToday } from '../../utils/date'

import { NavWrapper } from './style'

function Nav(props) {
  // other handle
  const electron = window.electron

  // handle function
  const closeWindow = () => {
    electron.ipcRenderer.send('mainWindow:close')
  }

  return (
    <NavWrapper>
      <div className='date-control enable-click'>{getToday()}</div>
      <NavLink className='to-do-list enable-click' to='/toDoList'>待办事项</NavLink>
      <NavLink className='completed enable-click' to='/completed'>已完成</NavLink>
      <NavLink className='establish enable-click' to='/establish'>
        <div className='add-icon enable-click'>+</div>
        <div className='text'>新建</div>
      </NavLink>
      <div className="close-btn enable-click" onClick={() => closeWindow()}>×</div>
    </NavWrapper>
  )
}

export default memo(Nav)
