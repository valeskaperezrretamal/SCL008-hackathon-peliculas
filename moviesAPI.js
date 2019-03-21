
//window.getData = getData;
// prueba para comprobar función. Conectar html
let barra_peliculas=document.getElementById("barra_peliculas")

//peliculas con la cuales vamos a trabajar 
        const nombrePelis = ["infinity war",
                        "the avengers",
                        "age of ultron",
                        "Black Panther",
                        "Iron Man 3",
                        "civil war",
                        "spiderman 3",
                        "thor",
                        "venom",
                        "ragnarok",
                        "ant man",
                        "doctor strange",
                        "guardians of the galaxy",
                        "captain marvel",
                        "into the spider-verse",
                        "Iron Man 2",
                        "Iron Man",
                        "Winter soldier",
                        "Ant-Man and the Wasp",
                        "Avengers: Endgame"];
//obtener la data
let getdata=()=>{
    
    for(let i =0;i<nombrePelis.length;i++){
    
    fetch("http://www.omdbapi.com/?t="+ nombrePelis[i]  +"&apikey=e9cb41b7").then((response)=>{
        return response.json();
    }).then((j) => {
       
       document.getElementById("Title"+i).innerHTML=j.Title;
       
       document.getElementById("poster"+i).src=j.Poster;
            
    });
  
}
}
let fillFilms = () =>{
    
    let  htmlcode ="";

    for(let i =0;i<nombrePelis.length;i++){
    
    htmlcode=htmlcode + '<img id="poster'+i+'" src="" alt="" class="posters"></img>'
                                +  '<h1 id="Title'+i+'"></h1>';
    
    }
    barra_peliculas.innerHTML=htmlcode;    
   
    
}
fillFilms();
getdata();
