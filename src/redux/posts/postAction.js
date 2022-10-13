import { FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "./postTypes";

export function fetchPostSuccess(post) {
    return {
        type: FETCH_POST_SUCCESS,
        payload: post
    }
}
export function fetchPostFailure(error) {
    return {
        type: FETCH_POST_FAILURE,
        payload: error
    }
}
export function fetchPostRequest(id) {
    return {
        type: FETCH_POST_REQUEST,
        payload: id
    }
}