const ratings = {
    experience_comment:'',
    safety_rating: 0,
    english_rating: 0 ,
    cost_rating: 0,
    friendly_rating: 0 ,
    reconmend_rating: 0 ,
    travel_page_id: 0 ,
    coworking_space_name: '',
    coworking_space_address: '',
    coworking_space_city: '' ,
    coworking_space_country: '',
    coworking_space_zip: 0, 

}

const ratingReducer = (state = ratings, action) => {
    switch (action.type) {
        case 'SET_SAFTEY_RATING':
            return { ...state, safety_rating: action.payload};
        case 'SET_ENGLISH_RATING':
            return { ...state, english_rating: action.payload };
        case 'SET_COST_RATING':
            return { ...state, cost_rating: action.payload };
        case 'SET_FRIENDLY_RATING':
            return { ...state, friendly_rating: action.payload };
        case 'SET_RECONMEND_RATING':
            return { ...state, reconmend_rating: action.payload };
        case 'SET_COWORKING_SPACE_NAME':
            return { ...state, coworking_space_name: action.payload };
        case 'SET_COWORKING_SPACE_ADDRESS':
            return { ...state, coworking_space_address: action.payload };
        case 'SET_COWORKING_SPACE_CITY':
            return { ...state, coworking_space_city: action.payload };
        case 'SET_COWORKING_SPACE_COUNTRY':
            return { ...state, coworking_space_country: action.payload };
        case 'SET_COWORKING_SPACE_ZIP':
            return { ...state, coworking_space_zip: action.payload };
        case 'SET_EXPERIENCE_COMMENT':
            return { ...state, experience_comment: action.payload };
        case 'SET_TRAVEL_ID':
            return { ...state, travel_page_id: action.payload };
        default:
            return state;
    }
};


export default ratingReducer;