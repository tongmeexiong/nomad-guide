const travelPageReviewReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TRAVEL_PAGE_DETAILS':
            return  action.payload;

        default:
            return state;
    }
};


export default travelPageReviewReducer;
