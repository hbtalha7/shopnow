import axios from 'axios'
import {
  ITEMS_LIST_FAIL,
  ITEMS_LIST_REQUEST,
  ITEMS_LIST_SUCCESS,
  ITEM_DETAILS_FAIL,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_SUCCESS,
  ITEM_ADD_FAIL,
  ITEM_ADD_SUCCESS,
  ITEM_ADD_REQUEST
} from "../constants/itemconstants";
import data from '../data'
export const itemslist = () => async(dispatch) => {
  dispatch({
    type: ITEMS_LIST_REQUEST,
  });
  try {
    const data = await axios.get("/api/items")
    const items= data.data
    // const items=data.items
    console.log(items)
    dispatch({
      type: ITEMS_LIST_SUCCESS,
      payload: items,
    });
  } catch (error) {
    dispatch({
      type: ITEMS_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const itemdetails=(item_id)=>async(dispatch)=>{
    dispatch({
        type:ITEM_DETAILS_REQUEST,
        payload:item_id
    })
    try {
      const data = await axios.get(`/api/items/${item_id}`)
      const item= data.data
      console.log(item)
        dispatch({
            type:ITEM_DETAILS_SUCCESS,
            payload:item
        })
    } catch (error) {
            dispatch({
                type:ITEM_DETAILS_FAIL,
                payload: error.Response && error.Response.data.message?
                error.Response.data.message:
                error.message
            })       
    }
}

export const itemregister = (title, imageId, price,descrip,qty,seller) => async (dispatch) => {
  dispatch({ type: ITEM_ADD_REQUEST, payload: { title, descrip } });
  try {
    const { data } = await axios.post('/api/items/additem', {
      title,
      imageId,
      price,
      descrip,
      qty,
      seller
    });
    console.log(data)
    dispatch({ type: ITEM_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ITEM_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};