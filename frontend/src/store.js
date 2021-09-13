import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { itemslistReducer, itmedetailsReducer } from './reducers/itemsreducers';
import thunk from 'redux-thunk'
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';

const initialState = {
    userSignin: {
      userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
}
const reducer=combineReducers({
    itemsListsto:itemslistReducer,
    itemdetail:itmedetailsReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
})
const composeenhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store=createStore(
    
    reducer,
    initialState,
    composeenhancer(applyMiddleware(thunk))
);

export default store;