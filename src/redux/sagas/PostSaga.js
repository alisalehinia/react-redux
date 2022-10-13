import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchPostFailure, fetchPostSuccess } from '../posts/postAction';
import { FETCH_POST_REQUEST } from '../posts/postTypes';

function* fetchPost(action) {
    try {
        const response = yield call(() => axios.get(`https://jsonplaceholder.typicode.com/posts/${action.payload}`));
        yield put(fetchPostSuccess(response.data))
    }
    catch (error) {
        yield put(fetchPostFailure(error.message))
    }
}
export function* watchFetchPost() {
    yield takeEvery(FETCH_POST_REQUEST, fetchPost)
}