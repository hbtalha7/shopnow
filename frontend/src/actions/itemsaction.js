import axios from 'axios'
import {
  ITEMS_LIST_FAIL,
  ITEMS_LIST_REQUEST,
  ITEMS_LIST_SUCCESS,
  ITEM_DETAILS_FAIL,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_SUCCESS,
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