const exploreEuropeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EXPLORE_EUROPE':
            return action.payload;
        default:
            return state;
    }
};



export default exploreEuropeReducer;
