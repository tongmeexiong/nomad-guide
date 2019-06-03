import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SECRETS" actions
function* currentReviewPostSaga() {
    yield takeLatest('POST_CURRENT_REVIEW', currentReviewPostData);
}

function* currentReviewPostData(action) {
    try {

        yield axios.post('/api/travelpage', action.payload);

    } catch (error) {
        console.log('EXPLORE Saga GET request failed', error);
    }
}



export default currentReviewPostSaga;
