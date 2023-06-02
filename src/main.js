import data from './data/movies/movies.json' assert {type: "json"};

const filmes = data
console.log(filmes)


const movies =document.getElementById("cinema")

data.forEach(function(item){
  movies.innerHTML +=   
  `
    <div class="cards">
      <h1>${item.Title}</h1>
      <p>${item.Year}</p>
      <p>${item.Director}</p>
      <addr>${item.Images}</addr>
    </div>
  `
})






/*const exibeInformacoes = movies.map( movies => `${movies.nome}` + ' year: ' + `${movies.year}`);

console.log(exibeInformacoes)*/                           