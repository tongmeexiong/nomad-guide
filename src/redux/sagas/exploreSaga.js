import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* fetchExploreAsiaData() {
    try {

        const exploreDataResponse = yield axios.get('/api/travelpage/asia');
        yield put({ type: 'SET_EXPLORE', payload: exploreDataResponse.data });

    } catch (error) {
        console.log('EXPLORE Saga GET request failed', error);
    }
}

function* fetchEurope() {
    try {

        const exploreDataEuropeResponse = yield axios.get('/api/travelpage/europe');
        yield put({ type: 'SET_EXPLORE_EUROPE', payload: exploreDataEuropeResponse.data });

    } catch (error) {
        console.log('EXPLORE Saga GET request failed', error);
    }
}

function* fetchCentral() {
    try {

        const exploreDataCentralResponse = yield axios.get('/api/travelpage/central');
        yield put({ type: 'SET_EXPLORE_CENTRAL', payload: exploreDataCentralResponse.data });

    } catch (error) {
        console.log('EXPLORE Saga GET request failed', error);
    }
}

function* fetchComment(action) {
    try {

        const travelPageCommentResponse = yield axios.get(`/api/travelpage/comment/${action.payload}`);
        yield put({ type: 'SET_COMMENT', payload: travelPageCommentResponse.data });

    } catch (error) {
        console.log('EXPLORE Saga GET request failed', error);
    }
}


function* exploreSaga() {
    yield takeLatest('FETCH_EXPLORE', fetchExploreAsiaData);
    yield takeLatest('FETCH_EXPLORE_EUROPE', fetchEurope)
    yield takeLatest('FETCH_EXPLORE_CENTRAL', fetchCentral)
    yield takeLatest('FETCH_COMMENT', fetchComment)

}



export default exploreSaga;
