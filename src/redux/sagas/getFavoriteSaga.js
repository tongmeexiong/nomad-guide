import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* fetchFavoriteData() {
    try {

        const fetchFavoriteDataResponse = yield axios.get('/api/travelpage/favorites');
        yield put({ type: 'SET_FAVORITE_LIST', payload: fetchFavoriteDataResponse.data });

    } catch (error) {
        console.log('Favorite Saga GET request failed', error);
    }
}

function* getFavoriteSaga() {
    yield takeLatest('FETCH_FAVORITE', fetchFavoriteData);
}



export default getFavoriteSaga;
