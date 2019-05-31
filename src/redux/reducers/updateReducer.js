const updateReviewReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_REVIEW':
            return action.payload;
        // case 'UNSET_SECRETS':
        //     return [];
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default updateReviewReducer;
