import 'redux'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from 'redux-thunk'
import offersReducer from "./reducers/offersReducer";
import appsReducer from "./reducers/appsReducer";

const reducers = combineReducers({
    offers: offersReducer,
    apps: appsReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store