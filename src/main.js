import disney from "../src/data/disney/characters.json" assert {type: "json"};

var dataListDisney = disney.data;
let htmlShow = document.getElementById("content");
let allHtmlShowInfos = "";

function displayNames(data) {
  allHtmlShowInfos = data.map(({ films, videoGames, parkAttractions, allies, enemies, _id, name, imageUrl, tvShows }) => {
    

    let nameHtml = "";
    if (name !== "") {
      nameHtml = `<h3 class="subtitle">Personagem:</h3><h3 class="title">${name}</h3>`;
    }

    let filmsHtml = "";
    if (Array.isArray(films) && films.length > 0) {
      filmsHtml = `<h3 class="subtitle">Filme:</h3><h3 class="title">${films}</h3>`;
    }

    
    let parkAttractionsHtml = "";
    if (Array.isArray(parkAttractions) && parkAttractions.length > 0) {
      parkAttractionsHtml = `<h3 class="subtitle">Brinquedo de parque:</h3><h3 class="title">${parkAttractions}</h3>`;
    }

    let alliesHtml = "";
    if (Array.isArray(allies) && allies.length > 0) {
      alliesHtml = `<h3 class="subtitle">Aliados:</h3><h3 class="title">${allies}</h3>`;
    }
    
    let enemiesHtml = "";
    if (Array.isArray(enemies) && enemies.length > 0) {
      enemiesHtml = `<h3 class="subtitle">Inimigos:</h3><h3 class="title">${enemies}</h3>`;
    }



    return `
<div>
<img class="picture" src=${imageUrl}>
     <details class="detailsJs">Personagem ${name}
        ${filmsHtml}
        ${parkAttractionsHtml}
        </details>
        </div>`;
      
  }).join("");

  htmlShow.innerHTML = allHtmlShowInfos;
}

displayNames(dataListDisney);
