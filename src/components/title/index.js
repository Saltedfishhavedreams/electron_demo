import React, { memo } from 'react'

import { TitleWrapper } from './style'

export default memo(function Title(props) {
  return (
    <TitleWrapper>
      <div>{props.title}</div>
    </TitleWrapper>
  )
})
