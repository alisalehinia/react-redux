import { FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "./postTypes";

const initialState = {
    post: {},
    error: "",
    loading: false
}
export function postReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POST_SUCCESS: return {
            ...state, post: action.payload, error: null, loading: false
        }
        case FETCH_POST_FAILURE: return {
            ...state, post: null, error: action.payload, loading: false
        }
        case FETCH_POST_REQUEST: return {
            ...state, post: null, error: null, loading: true
        }
        default: return state
    }
}