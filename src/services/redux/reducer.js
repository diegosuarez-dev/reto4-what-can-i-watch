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
            He comprobado que un mismo género tiene el mismo id tanto para películas como para series, pero la API tiene dos peticiones diferentes para cada una. El problema se dio cuando una serie daba error al renderizar porque tenía ids de género que no aparecían en la respuesta de géneros de serie y que, tras investigarlo, comprobé que sí aparecían en la respuesta de películas. Por lo tanto, almacenándolos todos en el mismo array y evitando los duplicados me aseguro de que se muestran correctamente.
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