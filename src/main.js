import dataMovies from './data/movies/movies.json' assert {type: "json"};

const dataListMovies = dataMovies;
console.log(dataListMovies);

let htmlDivToMovie = document.getElementById("card-container");
let htmlMovie;

function displayCards() {
        htmlMovie = dataListMovies.map(({ Title, Poster, Plot, Director, Year }) => {
                return (htmlMovie = `
                <div class="cards">
    <div class="card-flip">
    <div class="card-front">
      <figure>
        <img src = "${Poster}" class = "poster">
      </figure>
    </div>
    <div class="card-back">
      <h1>${Title}</h1>
      <p>${Director}</p>
      <p>${Plot}</p>
      </div>
     </div>
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



// <div class="card"> 
//             <div  class="card-flip">

//             <div  class="card-front">
//                 <figure>
//             <img class="poster" src="${Poster}" alt="Poster ${Title}">
                
//              </figure>

//              <div class= "content">
//             <h3>${Title}</h3>

//             <p>Diretor: ${Director}</p>

//             <p>Ano do filme: ${Year}</p>

//                 </div>
//                 </div>
//                 </div>

               
//                 <div class="card-back">
//                 <h4>${Plot}</h4>
//                 </div>
//                 </div>
//         </div>
