import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import getExploreSaga from './exploreSaga'
import reviewSaga from './reviewSaga'
import userReviewSaga from'./userReviewSaga'
import travelPostSaga from './travelPostSaga'
import travelPageGetSaga from './travelPageGetSaga'
import updateReviewGetSaga from './updateReviewGetSaga'
import currentReviewPostSaga from './currentReviewPost'
import deleteReviewSaga from './deleteReviewSaga'
import putReviewSaga from './putReviewSaga'
import travelPageGetDetailsSaga from './travelPageDataDetails'
import addReviewDetailsGetSaga from './addReviewDetailsGetSaga'
import travelFavoritePostSaga from './favoriteSaga'
import getFavoriteSaga from './getFavoriteSaga'

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    getExploreSaga(),
    reviewSaga(),
    userReviewSaga(),
    travelPostSaga(),
    travelPageGetSaga(),
    updateReviewGetSaga(),
    currentReviewPostSaga(),
    deleteReviewSaga(),
    putReviewSaga(),
    travelPageGetDetailsSaga(),
    addReviewDetailsGetSaga(),
    travelFavoritePostSaga(),
    getFavoriteSaga()
  ]);
}
