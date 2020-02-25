import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'; 

import cursos from './reducers/cursos'


const rootReducer = combineReducers({ cursos })

export default createStore(rootReducer , applyMiddleware(thunk));