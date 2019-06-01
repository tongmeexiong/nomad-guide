import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* userReviewSaga() {
    yield takeLatest('FETCH_USER_REVIEWS', fetchUserReviewData);
}

function* fetchUserReviewData() {
    try {

        const userReviewDataResponse = yield axios.get(`/api/travelpage/userreview`);
        yield put({ type: 'SET_USER_REVIEW', payload: userReviewDataResponse.data });

    } catch (error) {
        console.log('User Review Saga GET request failed', error);
    }
}



export default userReviewSaga;
