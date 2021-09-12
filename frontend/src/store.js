import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { itemslistReducer, itmedetailsReducer } from './reducers/itemsreducers';
import thunk from 'redux-thunk'

const reducer=combineReducers({
    itemsListsto:itemslistReducer,
    itemdetail:itmedetailsReducer
})
const composeenhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store=createStore(
    reducer,
    composeenhancer(applyMiddleware(thunk))
);

export default store;