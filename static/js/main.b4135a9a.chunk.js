(this["webpackJsonpreto4-what-can-i-watch"]=this["webpackJsonpreto4-what-can-i-watch"]||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/blue_long_1.86ff7c17.svg"},34:function(e,t,a){e.exports=a(69)},39:function(e,t,a){},40:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),l=a.n(i),o=(a(39),a(40),a(5)),c=a(2),m=function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"\xbfQu\xe9 puedo ver?"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(o.c,{className:"nav-link",to:"/reto4-what-can-i-watch/",activeClassName:"active"},"Home")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Pel\xedculas"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement(o.c,{className:"dropdown-item",to:"/reto4-what-can-i-watch/movie/top10"},"Las 10 m\xe1s populares"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement(o.c,{className:"dropdown-item",to:"/reto4-what-can-i-watch/movie/search"},"Buscar pel\xedculas"))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Series"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement(o.c,{className:"dropdown-item",to:"/reto4-what-can-i-watch/tv/top10"},"Las 10 m\xe1s populares"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement(o.c,{className:"dropdown-item",to:"/reto4-what-can-i-watch/tv/search"},"Buscar series")))))))},s=a(4),d=a(6),u=a.n(d),v=function(e){return function(t,a){return e({type:"LOAD_RESULTS",itemType:t,items:a})}},p=function(e){return function(t){return e({type:"QUERY_SENT",querySent:t})}},h=function(e){return function(t,a){return e({type:"LOAD_GENRES",itemType:t,genres:a})}},E=function(e){return function(t){return e({type:"LOAD_MOVIE_DETAILS",detailedMovie:t})}},b=function(e){return function(t){return e({type:"LOAD_SERIES_DETAILS",detailedSeries:t})}},g=function(e){return function(t){return e({type:"LOAD_RECOMMENDED_MOVIES",recommendedMovies:t})}},f=function(e){return function(t){return e({type:"LOAD_RECOMMENDED_SERIES",recommendedSeries:t})}},S=Object(s.b)((function(e){return{genres:e.genres}}),null)((function(e){var t;return r.a.createElement(o.b,{to:"/reto4-what-can-i-watch/movie/".concat(e.movie.id)},r.a.createElement("div",{className:"media"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200"+e.movie.poster_path,className:"mr-3",alt:"Poster of ".concat(e.movie.title)}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h4",{className:"mt-0"},e.movie.title),r.a.createElement("h6",{className:"mt-0"},"T\xedtulo original: ",e.movie.original_title),r.a.createElement("h6",{className:"mt-0"},"Fecha de lanzamiento: ",e.movie.release_date),r.a.createElement("h6",{className:"mt-0"},"G\xe9neros:"),r.a.createElement("ul",null,null===(t=e.movie.genre_ids)||void 0===t?void 0:t.map((function(t){var a;return r.a.createElement("li",{key:e.movie.id+t},null===(a=e.genres.filter((function(e){return e.id===t}))[0])||void 0===a?void 0:a.name)}))),r.a.createElement("h6",{className:"mt-0"},"N\xfamero de votos: ",e.movie.vote_count),r.a.createElement("h6",{className:"mt-0"},"Puntuaci\xf3n media: ",e.movie.vote_average),r.a.createElement("p",null,e.movie.overview.length>140?e.movie.overview.substring(0,e.movie.overview.indexOf(" ",139))+"... ":e.movie.overview))))})),w=Object(s.b)((function(e){return{genres:e.genres}}),null)((function(e){var t;return r.a.createElement(o.b,{to:"/reto4-what-can-i-watch/tv/".concat(e.serie.id)},r.a.createElement("div",{className:"media"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200"+e.serie.poster_path,className:"mr-3",alt:"Poster of ".concat(e.serie.name)}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h5",{className:"mt-0"},e.serie.name),r.a.createElement("h6",{className:"mt-0"},"T\xedtulo original: ",e.serie.original_name),r.a.createElement("h6",{className:"mt-0"},"Primera emisi\xf3n: ",e.serie.first_air_date),r.a.createElement("h6",{className:"mt-0"},"G\xe9neros:"),r.a.createElement("ul",null,null===(t=e.serie.genre_ids)||void 0===t?void 0:t.map((function(t){var a;return r.a.createElement("li",{key:e.serie.id+t},null===(a=e.genres.filter((function(e){return e.id===t}))[0])||void 0===a?void 0:a.name)}))),r.a.createElement("h6",{className:"mt-0"},"N\xfamero de votos: ",e.serie.vote_count),r.a.createElement("h6",{className:"mt-0"},"Puntuaci\xf3n media: ",e.serie.vote_average),r.a.createElement("p",null,e.serie.overview.length>140?e.serie.overview.substring(0,e.serie.overview.indexOf(" ",139))+"... ":e.serie.overview))))})),_=(a(63),Object(s.b)((function(e){return{movies:e.movies,series:e.series,genres:e.genres}}),(function(e){return{loadTop10:v(e),loadGenres:h(e)}}))((function(e){return Object(n.useEffect)((function(){u.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES\n            ").then((function(t){return e.loadGenres("movie",t.data.genres)})).catch(console.error),u.a.get("https://api.themoviedb.org/3/genre/tv/list?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES\n            ").then((function(t){return e.loadGenres("tv",t.data.genres)})).catch(console.error),u.a.get("https://api.themoviedb.org/3/".concat(e.match.params.itemType,"/popular?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES&page=1")).then((function(t){return e.loadTop10(e.match.params.itemType,t.data.results)})).catch(console.error)}),[e.match.params.itemType]),"movie"===e.match.params.itemType?r.a.createElement("div",{className:e.match.params.itemType},e.movies.slice(0,10).map((function(e){return r.a.createElement(S,{movie:e,key:e.id})}))):"tv"===e.match.params.itemType?r.a.createElement("div",{className:e.match.params.itemType},e.series.slice(0,10).map((function(e){return r.a.createElement(w,{serie:e,key:e.id})}))):r.a.createElement("div",null)}))),y=(a(64),Object(s.b)((function(e){return{detailedMovie:e.detailedMovie,recommendedMovies:e.recommendedMovies}}),(function(e){return{loadDetailedMovie:E(e),loadRecommendedMovies:g(e)}}))((function(e){var t;return Object(n.useEffect)((function(){u.a.get("https://api.themoviedb.org/3/movie/".concat(e.match.params.movieId,"?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES\n            ")).then((function(t){return e.loadDetailedMovie(t.data)})).catch(console.error),u.a.get("https://api.themoviedb.org/3/movie/".concat(e.match.params.movieId,"/recommendations?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES&page=1\n            ")).then((function(t){return e.loadRecommendedMovies(t.data.results)})).catch(console.error),window.scrollTo(0,0)}),[e.match.params.movieId]),r.a.createElement("article",{className:"detailedMovie"},r.a.createElement("header",null,r.a.createElement("div",{className:"leftHeader"},r.a.createElement("h3",null,e.detailedMovie.title),r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200"+e.detailedMovie.poster_path,alt:"Poster of ".concat(e.detailedMovie.title)})),r.a.createElement("div",{className:"rightHeader"},r.a.createElement("h6",null,"T\xedtulo original: ",e.detailedMovie.original_title),r.a.createElement("h6",null,"Fecha de lanzamiento: ",e.detailedMovie.release_date),r.a.createElement("h6",null,"G\xe9neros: "),r.a.createElement("ul",null,null===(t=e.detailedMovie.genres)||void 0===t?void 0:t.map((function(t){return r.a.createElement("li",{key:e.detailedMovie.id+t.id},t.name)}))),r.a.createElement("h6",null,"Duraci\xf3n: ",e.detailedMovie.runtime," minutos"),r.a.createElement("h6",null,"N\xfamero de votos: ",e.detailedMovie.vote_count),r.a.createElement("h6",null,"Puntuaci\xf3n media: ",r.a.createElement("span",null,e.detailedMovie.vote_average)))),r.a.createElement("main",null,e.detailedMovie.overview?r.a.createElement("h6",null,"Visi\xf3n general:"):null,e.detailedMovie.overview?r.a.createElement("p",null,e.detailedMovie.overview):null),r.a.createElement("footer",null,r.a.createElement("h4",null,"Tambi\xe9n te podr\xedan interesar..."),r.a.createElement("div",{className:"recommendations"},e.recommendedMovies.slice(0,5).map((function(e){return e.poster_path?r.a.createElement(o.b,{to:"/reto4-what-can-i-watch/movie/".concat(e.id),key:e.id},r.a.createElement("h6",null,e.title),r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200"+e.poster_path,alt:"Poster of ".concat(e.title)})):null})))))}))),N=(a(65),Object(s.b)((function(e){return{detailedSeries:e.detailedSeries,recommendedSeries:e.recommendedSeries}}),(function(e){return{loadDetailedSeries:b(e),loadRecommendedSeries:f(e)}}))((function(e){var t,a,i,l,c,m;return Object(n.useEffect)((function(){u.a.get("https://api.themoviedb.org/3/tv/".concat(e.match.params.seriesId,"?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES")).then((function(t){return e.loadDetailedSeries(t.data)})).catch(console.error),u.a.get("https://api.themoviedb.org/3/tv/".concat(e.match.params.seriesId,"/recommendations?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES&page=1\n            ")).then((function(t){return e.loadRecommendedSeries(t.data.results)})).catch(console.error),window.scrollTo(0,0)}),[e.match.params.seriesId]),r.a.createElement("article",{className:"detailedSeries"},r.a.createElement("header",null,r.a.createElement("div",{className:"leftHeader"},r.a.createElement("h3",null,e.detailedSeries.name),r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200"+e.detailedSeries.poster_path,alt:"Poster of ".concat(e.detailedSeries.name)})),r.a.createElement("div",{className:"rightHeader"},r.a.createElement("h6",null,"T\xedtulo original: ",e.detailedSeries.original_name),e.detailedSeries.first_air_date?r.a.createElement("h6",null,"Fecha primera emisi\xf3n: ",e.detailedSeries.first_air_date):null,e.detailedSeries.last_air_date?r.a.createElement("h6",null,"Fecha \xfaltima emisi\xf3n: ",e.detailedSeries.last_air_date):null,(null===(t=e.detailedSeries.last_episode_to_air)||void 0===t?void 0:t.episode_number)&&(null===(a=e.detailedSeries.last_episode_to_air)||void 0===a?void 0:a.season_number)?r.a.createElement("h6",null,"\xdaltimo episodio emitido: episodio ",null===(i=e.detailedSeries.last_episode_to_air)||void 0===i?void 0:i.episode_number," de la temporada ",null===(l=e.detailedSeries.last_episode_to_air)||void 0===l?void 0:l.season_number):null,r.a.createElement("h6",null,"G\xe9neros: "),r.a.createElement("ul",null,null===(c=e.detailedSeries.genres)||void 0===c?void 0:c.map((function(t){return r.a.createElement("li",{key:e.detailedSeries.id+t.id},t.name)}))),r.a.createElement("h6",null,"N\xfamero de votos: ",e.detailedSeries.vote_count),r.a.createElement("h6",null,"Puntuaci\xf3n media: ",r.a.createElement("span",null,e.detailedSeries.vote_average)))),r.a.createElement("main",null,e.detailedSeries.overview?r.a.createElement("h6",null,"Visi\xf3n general:"):null,e.detailedSeries.overview?r.a.createElement("p",null,e.detailedSeries.overview):null,e.detailedSeries.seasons?r.a.createElement("h6",null,"Temporadas:"):null,r.a.createElement("ul",null,null===(m=e.detailedSeries.seasons)||void 0===m?void 0:m.map((function(t){return r.a.createElement("li",{key:e.detailedSeries.id+t.id},t.name,r.a.createElement("ul",null,r.a.createElement("li",null,"Fecha estreno: ",t.air_date),r.a.createElement("li",null,"N\xba episodios: ",t.episode_count)))})))),r.a.createElement("footer",null,r.a.createElement("h4",null,"Tambi\xe9n te podr\xedan interesar..."),r.a.createElement("div",{className:"recommendations"},e.recommendedSeries.slice(0,5).map((function(e){return e.poster_path?r.a.createElement(o.b,{to:"/reto4-what-can-i-watch/tv/".concat(e.id),key:e.id},r.a.createElement("h6",null,e.name),r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200"+e.poster_path,alt:"Poster of ".concat(e.name)})):null})))))}))),O=a(21),T=(a(66),Object(s.b)(null,(function(e){return{loadSearch:v(e),querySent:p(e)}}))((function(e){var t=Object(n.useState)(""),a=Object(O.a)(t,2),i=a[0],l=a[1],o=Object(n.useState)(!1),c=Object(O.a)(o,2),m=c[0],s=c[1],d=Object(n.useRef)(null),v=Object(n.useRef)(null);Object(n.useEffect)((function(){d.current.focus(),l(""),v.current.checked=!1,s(!1),e.querySent(!1)}),[e.itemType]);return r.a.createElement("form",{className:"".concat(e.itemType,"Form"),onSubmit:function(t){t.preventDefault(),u.a.get("https://api.themoviedb.org/3/search/".concat(e.itemType,"?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES&query=").concat(encodeURIComponent(i),"&page=1&include_adult=").concat(m)).then((function(t){return e.loadSearch(e.itemType,t.data.results)})).catch(console.error),e.querySent(!0)}},r.a.createElement("input",{id:"name",type:"text",name:"name",ref:d,value:i,placeholder:"\xbfQu\xe9 ".concat("movie"===e.itemType?"pel\xedcula":"serie"," buscas?"),onChange:function(e){l(e.target.value)}}),r.a.createElement("input",{type:"checkbox",id:"adult",name:"adult",ref:v,value:m,onChange:function(e){s(e.target.checked)}}),r.a.createElement("label",{htmlFor:"adult"},"Adultos"),r.a.createElement("button",{type:"submit"},"Enviar"))}))),M=(a(67),Object(s.b)((function(e){return{movies:e.movies,series:e.series,querySent:e.querySent,genres:e.genres}}),(function(e){return{loadGenres:h(e),loadResults:v(e)}}))((function(e){return Object(n.useEffect)((function(){u.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES\n            ").then((function(t){return e.loadGenres("movie",t.data.genres)})).catch(console.error),u.a.get("https://api.themoviedb.org/3/genre/tv/list?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES\n            ").then((function(t){return e.loadGenres("tv",t.data.genres)})).catch(console.error),e.loadResults(e.match.params.itemType,[])}),[]),"movie"===e.match.params.itemType?r.a.createElement("section",null,r.a.createElement(T,{itemType:e.match.params.itemType}),r.a.createElement("div",{className:e.match.params.itemType},0===e.movies.length&&e.querySent?r.a.createElement("div",{className:"notFound"},r.a.createElement("h1",null,"Vaya... \xa1no hemos encontrado lo que buscas!"),r.a.createElement("h3",null,"Puede que no la tengamos pero... \xbfpodr\xedas asegurarte de que has escrito bien el t\xedtulo?")):e.movies.map((function(e){return r.a.createElement(S,{movie:e,key:e.id})})))):"tv"===e.match.params.itemType?r.a.createElement("section",null,r.a.createElement(T,{itemType:e.match.params.itemType}),r.a.createElement("div",{className:e.match.params.itemType},0===e.series.length&&e.querySent?r.a.createElement("div",{className:"notFound"},r.a.createElement("h1",null,"Vaya... \xa1no hemos encontrado lo que buscas!"),r.a.createElement("h3",null,"Puede que no la tengamos pero... \xbfpodr\xedas asegurarte de que has escrito bien el t\xedtulo?")):e.series.map((function(e){return r.a.createElement(w,{serie:e,key:e.id})})))):r.a.createElement("section",null,r.a.createElement(T,{itemType:e.match.params.itemType}))}))),j=a(33),D=a.n(j),k=(a(68),function(e){return r.a.createElement("article",{id:"hArticle"},r.a.createElement("h1",{id:"hH1"},"\xbfQu\xe9 puedo ver?"),r.a.createElement("h4",{id:"hH4"},"La web con toda la informaci\xf3n sobre tus pelis y series favoritas"),r.a.createElement("h6",{id:"hH6"},"Powered by"),r.a.createElement("img",{id:"hImg",src:D.a,alt:"Logo The Movie DB"}))});var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(m,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/reto4-what-can-i-watch/",component:k,exact:!0}),r.a.createElement(c.b,{path:"/reto4-what-can-i-watch/:itemType/top10",component:_,exact:!0}),r.a.createElement(c.b,{path:"/reto4-what-can-i-watch/:itemType/search",component:M,exact:!0}),r.a.createElement(c.b,{path:"/reto4-what-can-i-watch/movie/:movieId",component:y,exact:!0}),r.a.createElement(c.b,{path:"/reto4-what-can-i-watch/tv/:seriesId",component:N,exact:!0}),r.a.createElement(c.b,{path:"/"},r.a.createElement(c.a,{to:"/reto4-what-can-i-watch/"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(16),L=a(3),A={movies:[],series:[],querySent:!1,genres:[],detailedMovie:{},detailedSeries:{},recommendedMovies:[],recommendedSeries:[]};var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_RESULTS":if("movie"===t.itemType)return Object(L.a)(Object(L.a)({},e),{},{movies:t.items});if("tv"===t.itemType)return Object(L.a)(Object(L.a)({},e),{},{series:t.items});break;case"QUERY_SENT":return Object(L.a)(Object(L.a)({},e),{},{querySent:t.querySent});case"LOAD_GENRES":var a=[],n=e.genres.concat(t.genres).filter((function(e){if(!a.includes(e.id))return a.push(e.id),e}));return Object(L.a)(Object(L.a)({},e),{},{genres:n});case"LOAD_MOVIE_DETAILS":return Object(L.a)(Object(L.a)({},e),{},{detailedMovie:t.detailedMovie});case"LOAD_SERIES_DETAILS":return Object(L.a)(Object(L.a)({},e),{},{detailedSeries:t.detailedSeries});case"LOAD_RECOMMENDED_MOVIES":return Object(L.a)(Object(L.a)({},e),{},{recommendedMovies:t.recommendedMovies});case"LOAD_RECOMMENDED_SERIES":return Object(L.a)(Object(L.a)({},e),{},{recommendedSeries:t.recommendedSeries});default:return e}},x=Object(R.b)(q);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:x},r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.b4135a9a.chunk.js.map