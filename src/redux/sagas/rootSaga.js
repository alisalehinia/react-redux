import { all } from 'redux-saga/effects'
import { watchFetchPost } from './PostSaga'
export function* rootSaga() {
    yield all([watchFetchPost()])
}