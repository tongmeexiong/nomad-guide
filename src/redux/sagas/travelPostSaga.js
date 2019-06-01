
import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* travelPostSaga() {
    yield takeLatest('POST_TRAVEL', postTravelData);
}

function* postTravelData(action) {
    try {

        yield axios.post(`/api/travelpage`, action.payload);

    } catch (error) {
        console.log('User Review Saga POST request failed', error);
    }
}



export default travelPostSaga;
