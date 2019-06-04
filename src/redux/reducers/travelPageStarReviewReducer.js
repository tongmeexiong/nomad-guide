const ratings = {
    experience_comment: '',
    safety_rating: 0,
    english_rating: 0,
    cost_rating: 0,
    friendly_rating: 0,
    reconmend_rating: 0,
    travel_page_id: 0,
    coworking_space_name: '',
    coworking_space_address: '',
    coworking_space_city: '',
    coworking_space_country: '',
    coworking_space_zip: 0,

}

const travelPageStarReviews = (state = ratings, action) => {
    switch (action.type) {
        case 'SET_UPDATE_TRAVEL_REVIEW':
            return [action.payload];
        
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default travelPageStarReviews;

