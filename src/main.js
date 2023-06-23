console.log('cards')

let sectionContainerCards=document.querySelector('.containerCards')

//ler o arquivo json
fetch('movies.json')
.then(response => response.json())
.then(data => {
   // console.log (data)
    data.map(filme => {
       // console.log(filme)
        //criar um card para cada filme
      // let card= document.createElement('div')
      // card.classList.add('cardFrente')
      //  console.log(card)
        sectionContainerCards.innerHTML += `
        <div class="containerCards__card">

            <div class="containerCards__card__frente">
                <img src=${filme.Poster} alt=""/>
                <span>${filme.Title}</span>
            </div>

            <div class="containerCards__card__verso">
                <span id="tituloAno">Ano: </br></br>  ${filme.Year}</span>
                </br></br></br>
                <p id="tituloGenero">Gênero: </br></br>   ${filme.Genre}</p>
            </div>

        </div>
        `
        //sectionContainerCards.appendChild(card)
    })
})

//ler o arquivo json pela segunda vez para o verso do card para utilizar o efeito flip.
