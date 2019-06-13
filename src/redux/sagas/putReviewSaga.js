import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* putReviewData(action) {
    try {

        yield axios.put(`/api/travelpage/${action.payload.id}`, action.payload.rating);
        yield put({ type: 'GET_UPDATE_TRAVEL_REVIEW'});

    } catch (error) {
        console.log('PUT review Saga request failed', error);
    }
}

function* putReviewSaga() {
    yield takeLatest('PUT_REVIEW', putReviewData);
}


export default putReviewSaga;
