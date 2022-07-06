import React from 'react'
import {View, Text, Button} from 'react-native'

import { connect, useDispatch, useSelector } from 'react-redux'
import { changeCount } from './actions'

export default function ReduxMain(){

    const [count, setCount] = React.useState(0)

const StoreCount = useSelector(state => state.count)
const dispatch = useDispatch();

const IncrementCount =()=>{
    setCount(count => count + 1)
    dispatch(changeCount(count))
    
}

const DecrementCount =()=>{
    setCount(count => count - 1)
    dispatch(changeCount(count))
}



return(
    
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button 
         title="Increment" 
         onPress={IncrementCount}/>
        <Text>{count}</Text>
        <Text>`count from store ${StoreCount}`</Text>
        <Button 
         title="Decrement" 
         onPress={DecrementCount}/>
    </View>
  )
}

