const exploreCentralReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EXPLORE_CENTRAL':
            return action.payload;
        default:
            return state;
    }
};


export default exploreCentralReducer;
