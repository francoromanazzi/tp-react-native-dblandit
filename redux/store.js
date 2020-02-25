import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'; 

import cursos from './reducers/cursos'
import errors from './reducers/errors'


const rootReducer = combineReducers({ cursos, errors })

export default createStore(rootReducer , applyMiddleware(thunk));