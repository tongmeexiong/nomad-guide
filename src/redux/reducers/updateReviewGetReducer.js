const updateReviewGetReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_UPDATE_TRAVEL_REVIEW':
            return action.payload;
        default:
            return state;
    }
};


export default updateReviewGetReducer;
