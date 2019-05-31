
const userReviewReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_REVIEW':
            return action.payload;
        // case 'UNSET_SECRETS':
        //     return [];
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default userReviewReducer;
