import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteReviewSaga() {
    yield takeLatest('DELETE_REVIEW', travelPageData);
}

function* travelPageData(action) {
    try {

        yield axios.delete(`/api/travelpage/${action.payload}`);

    } catch (error) {
        console.log('TRAVEL Page Saga GET request failed', error);
    }
}



export default deleteReviewSaga;
