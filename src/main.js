import naruto from "./data/animes/naruto_quote.json" assert {
    type: "json"
}

const animes = naruto;

const divRoot = document.getElementById("root");

let allHtml;

function animess(data){
    allHtml = data.map(({foto, quote, character}) =>{
        return(allHtml= 
        `<div class="ani">

        <img id="persimg" src="${foto}" alt="">
        <p class="nomep">${character}</p>
        <p class="descp">${quote}</p>

        
        </div>`
            
            )
    })
    divRoot.innerHTML = allHtml;
}
animess(animes)



