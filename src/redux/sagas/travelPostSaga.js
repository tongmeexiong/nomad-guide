import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* postTravelData(action) {
    try {
        console.log('POST', action.payload);
        yield axios.post(`/api/travelpage/addtravel`, action.payload);
        yield put({ type: 'FETCH_USER_REVIEWS'})
    } catch (error) {
        console.log('User Review Saga POST request failed', error);
    }
}

function* travelPostSaga() {
    yield takeLatest('POST_TRAVEL', postTravelData);
}


export default travelPostSaga;
