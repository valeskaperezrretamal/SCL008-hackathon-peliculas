const movieList = [
    "infinity war",
    "the avengers",
    "age of ultron",
    "Black Panther",
    "Iron Man 3",
    "Captain America: Civil War",
    "Thor: The Dark World",
    "thor",
    "venom",
    "Thor: Ragnarok",
    "ant man",
    "doctor strange",
    "guardians of the galaxy",
    "captain marvel",
    "into the spider-verse",
    "Iron Man 2",
    "Iron Man",
    "The Incredible Hulk",
    "Ant-Man and the Wasp",
    "Avengers: Endgame"
];

window.movieList = movieList;

const getData = movieList => {
    const moviePromises = [];

    movieList.forEach(movieTitle => {
        const url = `https://www.omdbapi.com/?t=${movieTitle}&apikey=e9cb41b7`;

        const promise = fetch(url).then(response => {
            return response.json();
        }, err => {
            console.log('Hubo un error', err);
        });

        moviePromises.push(promise);
    });

    return moviePromises;
};

window.getData = getData;