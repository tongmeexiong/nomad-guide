import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* fetchReviewData(action) {
    try {

        const reviewDataResponse = yield axios.get(`/api/travelpage/reviews`);
        yield put({ type: 'SET_REVIEW', payload: reviewDataResponse.data });

    } catch (error) {
        console.log('EXPLORE Saga GET request failed', error);
    }
}

function* reviewSaga() {
    yield takeLatest('FETCH_REVIEW', fetchReviewData);
}


export default reviewSaga;
