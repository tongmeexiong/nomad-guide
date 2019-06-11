const exploreCentralReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EXPLORE_CENTRAL':
            return action.payload;
        // case 'UNSET_SECRETS':
        //     return [];
        default:
            return state;
    }
};



// user will be on the redux state at:
// state.user
export default exploreCentralReducer;
