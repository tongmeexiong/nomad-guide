// const reviews = {
//     cost_rating: 0,
//     english_rating: 0,
//     friendly_rating: 0,
//     reconmend_rating: 0,
//     safety_rating: 0
// }

const travelPageReviewReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TRAVEL_PAGE_DETAILS':
            return action.payload
        default:
            return state;
    }
};


export default travelPageReviewReducer;
