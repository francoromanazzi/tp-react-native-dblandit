import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'; 

import cursos from './reducers/cursos'
import errors from './reducers/errors'
import auth from './reducers/auth'


const rootReducer = combineReducers({ cursos, errors, auth })

export default createStore(rootReducer , applyMiddleware(thunk));