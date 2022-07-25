import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

// Reducers
import HomeReducer from "./reducer/homeReducer"

const reducer = combineReducers({
  HomeReducer
})

const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store