import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateReviewGetSaga() {
    yield takeLatest('GET_UPDATE_TRAVEL_REVIEW', updateReviewData);
}

function* updateReviewData(action) {
    try {

        const updateReviewDataResponse = yield axios.get(`/api/travelpage/updatetraveldetails/${action.payload}`);
        yield put({ type: 'SET_UPDATE_TRAVEL_REVIEW', payload: updateReviewDataResponse.data });

    } catch (error) {
        console.log('UPDATE TRAVEL REVIEW Page Saga GET request failed', error);
    }
}



export default updateReviewGetSaga;
