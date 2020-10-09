export const loadTop10Action = (dispatch) => (itemType, items) => 
    dispatch({
        type: 'LOAD_TOP10',
        itemType: itemType,
        items: items
    });