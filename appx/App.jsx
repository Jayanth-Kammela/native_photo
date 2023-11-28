import React from 'react'
import Login from './src/Screens/Login'
import Product from './src/Screens/Products'
import { Provider } from 'react-redux'
import Store from './src/Store'

const App = () => {
  return (
    <React.Fragment>
      {/* <Provider store={Store}> */}
      <Login/>
      <Product/>
      {/* </Provider> */}
    </React.Fragment>
  )
}

export default App