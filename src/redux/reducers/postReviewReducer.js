const postReviewReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NEW_POST':
            return action.payload;
        
        default:
            return state;
    }
};


export default postReviewReducer;
