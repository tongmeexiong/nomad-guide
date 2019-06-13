import axios from 'axios';
import {takeLatest } from 'redux-saga/effects';

function* currentReviewPostData(action) {
    try {
        yield axios.post('/api/travelpage', action.payload);

    } catch (error) {
        console.log('EXPLORE Saga GET request failed', error);
    }
}


function* currentReviewPostSaga() {
    yield takeLatest('POST_CURRENT_REVIEW', currentReviewPostData);
}



export default currentReviewPostSaga;
