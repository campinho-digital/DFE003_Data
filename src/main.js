import listaBeatles from "./data/beatles_songs/beatles_songs.json" assert {type: json}
const musicas = listaBeatles;
const card = document.getElementById("apareceCard");



musicas.forEach(elemento => {
    console.log(elemento);
    card.innerHTML += `
    <p> Nome do album: ${elemento.name}</p>
    
    
    
    `


})