import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
    main: todoReducer
})

export const store = configureStore({
    reducer: rootReducer
})