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
               
        </div class="descritivo__musicas"> Musicas 
            
        
        
        
            
            
            <ul> 
            <li class="listaItens"> ${elemento.tracks.map(item =>{
            return item + "<br>";   


            }).join("")}</li> 
        
        
        
    </ul>
    </div>  
    

        `
})


//<p> musicas; ${elemento.tracks}</p>
//<div id="apareceFiguraCard" class="imagem">