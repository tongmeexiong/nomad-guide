import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* travelPageData(action) {
    try {
        const travelPageReviewDataResponse = yield axios.get(`/api/travelpage/travelreviewdetails/${action.payload}`);

        yield put({ type: 'SET_TRAVEL_PAGE_DETAILS', payload: travelPageReviewDataResponse.data });


    } catch (error) {
        console.log('TRAVEL Page Saga GET request failed', error);
    }
}

function* travelPageGetSaga() {
    yield takeLatest('FETCH_TRAVEL_PAGE_REVIEWS', travelPageData);
}


export default travelPageGetSaga;
