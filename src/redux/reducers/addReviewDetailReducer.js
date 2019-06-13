const addReviewDetailReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADD_REVIEW_DETAILS':
            return action.payload;

        default:
            return state;
    }
};


export default addReviewDetailReducer;
