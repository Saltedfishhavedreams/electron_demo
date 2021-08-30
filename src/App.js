import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import route from './router'
import store from './store'

import Nav from './components/nav-control/'
import {
  AppWrapper,
  LeftNav,
  RightContent
} from './style'

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <LeftNav>
          <Nav />
        </LeftNav>

        <RightContent>
          {renderRoutes(route)}
        </RightContent>
      </AppWrapper>
    </Provider>
  )
}

export default memo(App)
