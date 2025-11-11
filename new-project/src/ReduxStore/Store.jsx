import {createStore} from 'redux'
import countReducer from './Reducer'

let store = createStore(countReducer)

export default store