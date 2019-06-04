
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* travelPostSaga() {
    yield takeLatest('POST_TRAVEL', postTravelData);

}

function* postTravelData(action) {
    try {

        yield axios.post(`/api/travelpage/addtravel`, action.payload);
        // yield put('SET_NEW_POST', action.payload)
        // console.log('IN POST', action.payload);
    } catch (error) {
        console.log('User Review Saga POST request failed', error);
    }
}



export default travelPostSaga;
