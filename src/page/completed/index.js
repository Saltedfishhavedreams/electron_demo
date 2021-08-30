import React, { memo } from 'react'
import { shallowEqual, useSelector, } from 'react-redux'

import Title from '../../components/title'
import { CompleteWrapper } from './style'

export default memo(function Completed() {
  // redux hook
  const { completeList } = useSelector(state => {
    return {
      completeList: state.get('completeList')
    }
  }, shallowEqual)

  return (
    <CompleteWrapper>
      <Title title='今日已完成任务' />
      <ul>
        {
          completeList.slice(0, 10).map(item => {
            return (
              <li>
                <div className='task-info'>{item.taskName}</div>
                <div className='icon'></div>
              </li>
            )
          })
        }
      </ul>

      <div className='warning-words'>你已经对自己信守承诺 <span className='count'>{completeList.length}</span> 次了, 继续加油哦!</div>
    </CompleteWrapper>
  )
})
