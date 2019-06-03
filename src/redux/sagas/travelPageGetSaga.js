import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* travelPageGetSaga() {
    yield takeLatest('FETCH_TRAVEL_PAGE', travelPageData);
    yield takeLatest('FETCH_TRAVEL_PAGE_DETAILS', travelPageDataDetails);
}

function* travelPageData(action) {
    try {

        const travelPageReviewDataResponse = yield axios.get(`/api/travelpage/travelreviewdetails/${action.payload}`);

        yield put({ type: 'SET_TRAVEL_PAGE_DETAILS', payload: travelPageReviewDataResponse.data });


    } catch (error) {
        console.log('TRAVEL Page Saga GET request failed', error);
    }
}

function* travelPageDataDetails(action) {
    try {

        const travelPageDataResponse = yield axios.get(`/api/travelpage/traveldetails/${action.payload}`);

        yield put({ type: 'SET_TRAVEL_REVIEW_PAGE', payload: travelPageDataResponse.data });

    } catch (error) {
        console.log('TRAVEL Page Saga GET request failed', error);
    }
}



export default travelPageGetSaga;
