
import disney from "../src/data/disney/characters.json" assert {type: "json"};

var dataListDisney = disney.data;
let htmlShow = document.getElementById("card-container");
let allHtmlShowInfos = "";

function displayNames(data) {
  allHtmlShowInfos = data.map(({ films, shortFilms, videoGames, parkAttractions, allies, enemies, _id, name, imageUrl, url, tvShows }) => {
    let linkHtml = "";
    if (url) {
      linkHtml = `<a href="${url}">LINK</a>`;
    }

    let nameHtml = "";
    if (name !== "") {
      nameHtml = `<div class="subtitle">Personagem:</div><div class="title">${name}</div>`;
    }

    let filmsHtml = "";
    if (Array.isArray(films) && films.length > 0) {
      filmsHtml = `<div class="subtitle">Filmes:</div><div class="title">${films}</div>`;
    }

    let shortFilmsHtml = "";
    if (Array.isArray(shortFilms) && shortFilms.length > 0) {
      shortFilmsHtml = `<div class="subtitle">Curtas:</div><div class="title">${shortFilms}</div>`;
    }
   
    let videoGamesHtml = "";
    if (Array.isArray(videoGames) && videoGames.length > 0) {
      videoGamesHtml = `<div class="subtitle">Games:</div><div class="title">${videoGames}</div>`;
    }
    
    let parkAttractionsHtml = "";
    if (Array.isArray(parkAttractions) && parkAttractions.length > 0) {
      parkAttractionsHtml = `<div class="subtitle">Brinquedo de parque:</div><div class="title">${parkAttractions}</div>`;
    }

    let alliesHtml = "";
    if (Array.isArray(allies) && allies.length > 0) {
      alliesHtml = `<div class="subtitle">Aliados:</div><div class="title">${allies}</div>`;
    }
    
    let enemiesHtml = "";
    if (Array.isArray(enemies) && enemies.length > 0) {
      enemiesHtml = `<div class="subtitle">Inimigos:</div><div class="title">${enemies}</div>`;
    }

    let tvShowsHtml = "";
    if (Array.isArray(tvShows) && tvShows.length > 0) {
      tvShowsHtml = `<div class="subtitle">Programas de Tv:</div><div class="title">${tvShows}</div>`;
    }

    return `
    <div class="card" id="card">
      <div class="gridContainerUp" id="gridContainerUp">
        ${nameHtml} 
        ${tvShowsHtml}
        ${filmsHtml}
        ${shortFilmsHtml}
        ${videoGamesHtml}
        ${parkAttractionsHtml}
        ${alliesHtml}
        ${enemiesHtml}
        <img class="picture" src=${imageUrl}></img><br>
        <div class="backgroundImg" id="backgroundImg"></div>
        <div class="title">${_id}</div>
        ${linkHtml}
      </div>
      
      

     
      </div>`;
  }).join("");

  htmlShow.innerHTML = allHtmlShowInfos;
}

displayNames(dataListDisney);

