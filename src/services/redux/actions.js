export const loadTop10Action = (dispatch) => (itemType, items) => 
    dispatch({
        type: 'LOAD_TOP10',
        itemType: itemType,
        items: items
    });

export const loadGenresAction = (dispatch) => (itemType, genres) => 
    dispatch({
        type: 'LOAD_GENRES',
        itemType: itemType,
        genres: genres
    });