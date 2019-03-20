
let barra_peliculas=document.getElementById("barra_peliculas")
let poster1=document.getElementById("poster1")
let poster2=document.getElementById("poster2")
let Title1=document.getElementById("Title1")
let Title2=document.getElementById("Title2")

    const nombrePelis = ["infinity war",
                        "the avengers",
                        "age of ultron"];
//obtener la data
let getData = (pelicula,id_img, id_title) =>{
    
    fetch("http://www.omdbapi.com/?t="+ pelicula  +"&apikey=e9cb41b7").then((response)=>{
        return response.json();
    }).then((j) => {
        console.log(j);
        id_title.innerHTML=j.Title;
        j.Year
        j.Ratings
        j.Actors
        j.Director
        id_img.src= j.Poster;
        j.Plot

    });
}

getData(nombrePelis[0],poster1,Title1);
getData(nombrePelis[1],poster2,Title2);
