import axios from "axios";
import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS, FETCH_USER_REQUEST } from "./userTypes";
//action creator
const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    }
}
const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}
const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}
//async action creator
export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const user = res.data;
                dispatch(fetchUserSuccess(user));
            })
            .catch(err => {
                dispatch(fetchUserFailure(err.message))
            })
    }
}