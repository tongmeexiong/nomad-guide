import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addReviewDetailsGetSaga() {
    yield takeLatest('FETCH_ADD_REVIEW', addReviewDetailsGet);
}

function* addReviewDetailsGet(action) {
    try {

        const addReviewDetailsGetResponse = yield axios.get(`/api/travelpage/addreviewpage/${action.payload}`);

        yield put({
            type: 'SET_ADD_REVIEW_DETAILS', payload: addReviewDetailsGetResponse.data });


    } catch (error) {
        console.log('TRAVEL Page Saga GET request failed', error);
    }
}


export default addReviewDetailsGetSaga;
