const list = document.getElementById('movielist')

const showData = moviePromises => {
  let html = ''

  moviePromises.forEach(promise => {
    promise.then(movie => {
      html += `<div class="card">
          <div class="thumbnail">
            <img src="${movie.Poster}" alt="${movie.Title}">
            <div class="caption">
              <h3>${movie.Title}</h3>
              <p>${movie.Plot}</p>
              <p>${movie.Actors}</p>
              <p>${movie.Year}</p>
            </div>
          </div>
        </div>`;
    });
  });

  Promise.all(moviePromises).then(() => {
    list.innerHTML = html;
  })
}

if (list) {
  const promises = window.getData(window.movieList)
  showData(promises)
}
