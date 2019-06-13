import axios from 'axios';
import {put, takeLatest } from 'redux-saga/effects';



function* travelPageDataDetails(action) {
    try {
        const travelPageDataResponse = yield axios.get(`/api/travelpage/traveldetails/${action.payload}`);

        yield put({ type: 'SET_TRAVEL_REVIEW_PAGE', payload: travelPageDataResponse.data });

    } catch (error) {
        console.log('TRAVEL Page Saga GET request failed', error);
    }
}

function* travelPageGetDetailsSaga() {
    yield takeLatest('FETCH_TRAVEL_PAGE_DETAILS', travelPageDataDetails);
}

export default travelPageGetDetailsSaga;
