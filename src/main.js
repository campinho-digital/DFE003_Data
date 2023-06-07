import dataMovies from './data/movies/movies.json' assert {type: "json"};

const dataListMovies = dataMovies;
console.log(dataListMovies);

let htmlDivToMovie = document.getElementById("card-container")
let htmlMovie

function displayCards(data) {
htmlMovie = dataMovies.map(({Title,Poster}) => {
return (htmlMovie =`<div class="card" id="card">
<div class="gridContainerUp" id="gridContainerUp">

<div class="title"> ${Title}</div>

<img src="${Poster}"/>
</div>
<div class ="backgroundImg" id="backgroundImg">

</div>
</div>
</div>
</div>

`);
});
htmlDivToMovie.innerHTML = htmlMovie.join("");
}
displayCards();
                      
