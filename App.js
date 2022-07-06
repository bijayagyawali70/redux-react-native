import React from 'react'
import {View, Text} from 'react-native'

import { Provider } from 'react-redux'

import ReduxMain from './Redux/ReduxMain'
import store from './Redux/store'

export default function App(){

  console.log(store.getState())
return(
<Provider store={store}>
  <ReduxMain/>
</Provider>
)

}
