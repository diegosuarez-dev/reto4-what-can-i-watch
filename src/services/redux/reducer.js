const initialState = {
    movies: [],
    series: []
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case 'LOAD_TOP10':
            if (action.itemType === 'movie') {
                console.log(action.items);
                return {
                    movies: action.items,
                    series: []
                };
            } else if (action.itemType === 'tv') {
                console.log(action.items);
                return {
                    movies: [],
                    series: action.items
                };
            }
            break;
        default:
            return state;
    }
}

export default reducer;