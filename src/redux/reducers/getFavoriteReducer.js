const getFavoriteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE_LIST':
            return action.payload;
        // case 'UNSET_SECRETS':
        //     return [];
        default:
            return state;
    }
};


export default getFavoriteReducer;
