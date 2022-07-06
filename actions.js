import * as actions from './actionTypes'

export const changeCount =(count) => {
    return{
        type : actions.COUNTER_CHANGE,
        payload : count
    }
}