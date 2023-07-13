import React, { PureComponent } from 'react'
import store from "./Store/Store"
import { Provider } from 'react-redux'
import AddTaskContainer from './Components/Taskmanage/AddTaskContainer'

export default class App extends PureComponent {
  render() {
    return (
     <Provider store={store}>
      <AddTaskContainer/>
     </Provider>
    )
  }
}

