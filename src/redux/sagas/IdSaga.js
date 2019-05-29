import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SECRETS" actions
function* idSaga() {
    yield takeLatest('EXPLORE_ID_CLICK', idData);
}

function* idData(action) {
    try {

        yield put({ type: 'SET_ID', payload: action.payload });

    } catch (error) {
        console.log('ID Saga  failed', error);
    }
}



export default idSaga;
