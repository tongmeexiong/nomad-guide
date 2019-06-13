import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* postFavoriteTravelData(action) {
    try {
        console.log('POST SAGA', action.payload);
        yield axios.post(`/api/travelpage/favorite`, action.payload);

    } catch (error) {
        console.log('User Review Saga POST request failed', error);
    }
}

function* deleteFavoriteTravelData(action) {
    try {
        yield axios.delete(`/api/travelpage//favorite/${action.payload}`);
        yield put({ type: 'FETCH_FAVORITE' })
    } catch (error) {
        console.log('User Review Saga DELETE request failed', error);
    }
}

function* travelFavoritePostSaga() {
    yield takeLatest('POST_FAVORITE', postFavoriteTravelData);
    yield takeLatest('DELETE_FAVORITE', deleteFavoriteTravelData);
}


export default travelFavoritePostSaga;
