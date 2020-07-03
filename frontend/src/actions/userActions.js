import Axios from "axios";
import Cookie from "js-cookie";
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_LOGOUT } from "../constants/userConstants";

const signin = (email,pass_code) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST,payload: {email,pass_code}});
    try{
        const {data} = await Axios.post("/jobSeeker/signin", {email, pass_code});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        Cookie.set('userInfo',JSON.stringify(data));
    }catch(error){
        dispatch({type: USER_SIGNIN_FAIL, payload: error.message});
    }
}

const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: USER_LOGOUT })
  }

export { signin, logout };