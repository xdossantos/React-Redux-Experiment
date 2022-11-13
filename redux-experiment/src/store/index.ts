
import {combineReducers, compose, createStore} from "redux"
import {todoReducer} from "../reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__? : typeof compose
    }
}


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const initialState = {}

const rootReducer = combineReducers({
    todo: todoReducer
})

export const store = createStore(rootReducer, initialState, composeEnhancer() )
