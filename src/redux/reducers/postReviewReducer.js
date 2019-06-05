const postReviewReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NEW_POST':
            return action.payload;
        
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default postReviewReducer;
