import * as actions from './actionTypes'


const initialState ={
    count : 0
}


export default function countReducer(state = initialState, action){
    switch(action.type){
        case actions.COUNTER_CHANGE :
            return{
                ...state,
                count : action.payload
            }
        
        default:
            return state
    }
}