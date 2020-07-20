import {combineReducers} from 'redux'
import LoginReducer from './LoginReducer'

const combinedreducer=combineReducers({
    LogReducer:LoginReducer
})
    

export default combinedreducer