const updateReviewGetReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_UPDATE_TRAVEL_REVIEW':
            return action.payload;

        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default updateReviewGetReducer;
