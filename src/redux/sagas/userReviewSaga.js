import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchUserReviewData() {
    try {

        const userReviewDataResponse = yield axios.get(`/api/travelpage/userreview`);
        yield put({ type: 'SET_USER_REVIEW', payload: userReviewDataResponse.data });

    } catch (error) {
        console.log('User Review Saga GET request failed', error);
    }
}

function* fetchAverageRating() {
    try {

        const fetchAverageRatingResponse = yield axios.get(`/api/travelpage/average`);
        yield put({ type: 'SET_AVERAGE', payload: fetchAverageRatingResponse.data });

    } catch (error) {
        console.log('User Review Saga GET request failed', error);
    }
}


function* userReviewSaga() {
    yield takeLatest('FETCH_USER_REVIEWS', fetchUserReviewData);
    yield takeLatest('AVERAGE_RATING', fetchAverageRating)
}



export default userReviewSaga;
