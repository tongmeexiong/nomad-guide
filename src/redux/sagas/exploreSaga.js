import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* fetchExploreData() {
    try {

        const exploreDataResponse = yield axios.get('/api/travelpage');
        yield put({ type: 'SET_EXPLORE', payload: exploreDataResponse.data });

    } catch (error) {
        console.log('EXPLORE Saga GET request failed', error);
    }
}

function* exploreSaga() {
    yield takeLatest('FETCH_EXPLORE', fetchExploreData);
}



export default exploreSaga;
