const ratings = {
        saftey_rating: 0,
        english_rating:0,
        cost_rating: 0,
        friendly_rating: 0,
        reconmend_rating: 0
}

const ratingeReducer = (state = ratings, action) => {
    switch (action.type) {
        case 'SET_SAFTEY_RATING':
            return { ...state, saftey_rating: action.payload};
        case 'SET_ENGLISH_RATING':
            return { ...state, english_rating: action.payload };
        case 'SET_COST_RATING':
            return { ...state, cost_rating: action.payload };
        case 'SET_FRIENDLY_RATING':
            return { ...state, friendly_rating: action.payload };
        case 'SET_RECONMEND_RATING':
            return { ...state, reconmend_rating: action.payload };
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default ratingeReducer;