const travelPageReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TRAVEL_PAGE':
            return action.payload;
        // case 'UNSET_SECRETS':
        //     return [];
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default travelPageReducer;