const list = document.getElementById('list');

const showData = moviePromises => {
    let html = '';
   
    Promise.all(moviePromises).then(movies => {
        console.log('MOVIE', movies);
        
        movies.forEach(movie => {
            html += `<div>
                <h5>${movie.Title}</h5>
                <p>Actors: ${movie.Actors}</p>
                <p>Year: ${movie.Year}</p>
                <p>Plot: ${movie.Plot}</p>
                <img id="poster" src="${movie.Poster}" alt="" class="posters"></img>
                </div>`;
        });
        
        
        list.innerHTML = html;
    })
}
const promises = window.getData(window.movieList);
showData(promises)