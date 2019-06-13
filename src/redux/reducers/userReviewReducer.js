
const userReviewReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_REVIEW':
            return action.payload;
        default:
            return state;
    }
};


export default userReviewReducer;
