import { Redirect } from "react-router"

import ToDoList from '../page/to_do_list'
import Completed from '../page/completed'
import Establish from '../page/establish'

const route = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to='/toDoList' />
    }
  },
  {
    path: '/toDoList',
    component: ToDoList
  },
  {
    path: '/completed',
    component: Completed
  },
  {
    path: '/establish',
    component: Establish
  }
]

export default route
