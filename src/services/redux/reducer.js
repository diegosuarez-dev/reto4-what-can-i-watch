const initialState = {
    movies: [],
    series: [],
    genres: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_TOP10':
            if (action.itemType === 'movie') {
                return {
                    ...state,
                    movies: action.items,
                };
            } else if (action.itemType === 'tv') {
                return {
                    ...state,
                    series: action.items,
                };
            }
            break;
        case 'LOAD_GENRES':
            /*
            He tenido que almacenar en el mismo array los géneros de películas y los de series porque me he dado cuenta de algunas series que tienen ids de género de película y eso hacía que diera error al renderizar.
            */
            let prevId = [];
            let newGenres = state.genres.concat(action.genres).filter(
                //eslint-disable-next-line
                el => {
                    if (!prevId.includes(el.id)) {
                        prevId.push(el.id);
                        return el;
                    }
                }
            );            
            return {
                ...state,
                genres: newGenres
            }
        default:
            return state;
    }
}

export default reducer;