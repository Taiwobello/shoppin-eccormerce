import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";
import rootReducer from './rootReducers';

const saveToLocalStorage = (state) => {
    const saveState = JSON.stringify(state)
    localStorage.setItem("persistanceState", saveState)
}

const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem("persistanceState");
    if (savedData === null) {
        return undefined
    }
    return JSON.parse(savedData)
}

const store = createStore(rootReducer, loadFromLocalStorage(), applyMiddleware(logger))

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
