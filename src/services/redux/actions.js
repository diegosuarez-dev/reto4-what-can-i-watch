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

export const loadDetailedMovieAction = (dispatch) => (detailedMovie) => 
    dispatch({
        type: 'LOAD_MOVIE_DETAILS',
        detailedMovie: detailedMovie
    });

export const loadDetailedSeriesAction = (dispatch) => (detailedSeries) => 
    dispatch({
        type: 'LOAD_SERIES_DETAILS',
        detailedSeries: detailedSeries
    });

export const loadRecommendedMoviesAction = (dispatch) => (recommendedMovies) => 
    dispatch({
        type: 'LOAD_RECOMMENDED_MOVIES',
        recommendedMovies: recommendedMovies
    });

export const loadRecommendedSeriesAction = (dispatch) => (recommendedSeries) => 
    dispatch({
        type: 'LOAD_RECOMMENDED_SERIES',
        recommendedSeries: recommendedSeries
    });