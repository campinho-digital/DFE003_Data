import dataMovies from './data/movies/movies.json' assert {type: "json"};

const dataListMovies = dataMovies;
console.log(dataListMovies);

let htmlDivToMovie = document.getElementById("card-container");
let htmlMovie;

function displayCards() {
htmlMovie = dataListMovies.map(({Title,Poster,Plot,Director,Year}) => {
return (htmlMovie =`
<div class="card"> 
            
            <img src="${Poster}" alt="Poster ${Title}">

                <h3>${Title}</h3>

                <h4>${Plot}</h4>

                <p>Diretor: ${Director}</p>

                <p>Ano do filme: ${Year}</p>

        </div>

`);
});
htmlDivToMovie.innerHTML = htmlMovie.join("");

}

displayCards();




//         {/* <div class="card" id="card">
// <div class="gridContainerUp" id="gridContainerUp">

// <div class="title"> ${Title}</div>

// <img src="${Poster}"/>

// <div class ="backgroundImg" id="backgroundImg">

// </div>
// </div>
// </div> */}