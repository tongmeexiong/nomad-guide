import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import exploreReducer from './exploreReducer'
import reviewReducer from './reviewReducer'
import ratingReducer from './ratingReducer'
import userReviewReducer from'./userReviewReducer'
import travelPageReviewReducer from './travelPageReviewReducer'
import updateReviewGetReducer from './updateReviewGetReducer'
import travelPageDetailReducer from './travelPageDetailReducer'
import travelPageStarReviews from './travelPageStarReviewReducer'
import postReviewReducer from './postReviewReducer'
import addReviewDetailReducer from './addReviewDetailReducer'
import getFavoriteReducer from './getFavoriteReducer'
import exploreEuropeReducer from './exploreEurope'
import exploreCentralReducer from './exploreCentralReducer'
import commentReducer from './commentReducer'

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga


const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  exploreReducer,
  reviewReducer,
  ratingReducer,
  userReviewReducer,
  travelPageReviewReducer,
  updateReviewGetReducer,
  travelPageDetailReducer,
  travelPageStarReviews,
  postReviewReducer,
  addReviewDetailReducer,
  getFavoriteReducer,
  exploreEuropeReducer,
  exploreCentralReducer,
  commentReducer
});

export default rootReducer;
