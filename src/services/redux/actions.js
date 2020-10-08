import axios from "axios";

const get10MorePopular = (itemType) => {
    let items = [];
    console.log(itemType);
    axios.get(`https://api.themoviedb.org/3/${itemType}/popular?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES&page=1`).then(res => res.data.results.map((item) => items.push(item))).catch(console.error);
    return items;
}

export const loadTop10Action = (dispatch) => (itemType) => 
    dispatch({
        type: 'LOAD_TOP10',
        itemType: itemType,
        items: get10MorePopular(itemType)
    });