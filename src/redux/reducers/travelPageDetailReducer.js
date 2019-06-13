const travelPageDetailReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TRAVEL_REVIEW_PAGE':
            return action.payload;
        default:
            return state;
    }
};


export default travelPageDetailReducer;
