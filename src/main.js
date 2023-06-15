import listaBeatles from "./data/beatles_songs/beatles_songs.json" assert {type: "json"};
const musicas = listaBeatles;
const card = document.getElementById("apareceCard");
const imagem = document.getElementById("apareceFiguraCard");


musicas.forEach(elemento => {
    card.innerHTML += `
    <div id="descritivoCard" class="descritivoCard">   
        <div>
            <p>  ${elemento.name}</p>
            <br>
            
            
            <img src="${elemento.cover}">
               
        </div>
        <p class="descritivo__musicas"> Musicas <br>  ${elemento.tracks}</p> 
        
        
        
   
    </div>  
    

        `
})


//<p> musicas; ${elemento.tracks}</p>
//<div id="apareceFiguraCard" class="imagem">