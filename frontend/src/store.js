import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { itemslistReducer, itmedetailsReducer } from './reducers/itemsreducers';
import thunk from 'redux-thunk'
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
  } from './reducers/orderreducers';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/cartreducers';

const initialState = {
    userSignin: {
      userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
    cart: {
        cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [],
          shippingAddress: localStorage.getItem('shippingAddress')
          ? JSON.parse(localStorage.getItem('shippingAddress'))
          : {},
          paymentMethod: 'PayPal',
      },
}
const reducer=combineReducers({
    itemsListsto:itemslistReducer,
    itemdetail:itmedetailsReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    cart: cartReducer,
    orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
})
const composeenhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store=createStore(
    
    reducer,
    initialState,
    composeenhancer(applyMiddleware(thunk))
);

export default store;