import { combineReducers, createStore } from 'redux'
import tabsReducer from './tabsReducer'


let reducers = combineReducers({
    tabsState: tabsReducer
})

let store = createStore(reducers)
window.store = store

export default store;
