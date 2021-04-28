import React from 'react'

import AppRoute from './routes/AppRoute'

import { Provider} from 'react-redux'
import store from './store/store'




const App = props => {

  return (
    <div>
      
      <Provider store={store}>
          <AppRoute />
      </Provider>

    </div>
  )
}

export default App
