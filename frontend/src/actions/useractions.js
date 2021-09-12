import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userconstants"
import axios from 'axios'
import { json } from "express/lib/response"

export const signin=(email,password)=>async(dispatch)=>{
    dispatch({
        type:USER_SIGNIN_REQUEST,payload:{email,password}
    })
    try {
        const {data}=await axios.post('api/users/signin',{email,password})
        const user=data.data
        dispatch({
            type:USER_SIGNIN_SUCCESS,
            payload:user
        })
        localStorage.setItem('userInfo',json.stringify(user))
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        })
    }
}