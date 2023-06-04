import disney from "../src/data/disney/characters.json" assert {type: "json"};

var dataListDisney = disney.data;
let htmlShow = document.getElementById("content");
let allHtmlShowInfos = "";

function displayNames(data) {
  allHtmlShowInfos = data.map(({ films, videoGames, parkAttractions, allies, enemies, _id, name, imageUrl, tvShows }) => {
    

    let nameHtml = "";
    if (name !== "") {
      nameHtml = `<div class="subtitle">Personagem:</div><div class="title">${name}</div>`;
    }

    let filmsHtml = "";
    if (Array.isArray(films) && films.length > 0) {
      filmsHtml = `<div class="subtitle">Filmes:</div><div class="title">${films}</div>`;
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



    return `
    <div>
      <li class="card">
      <li class="id">${_id}</li>

        ${nameHtml} 
        ${filmsHtml}
        ${parkAttractionsHtml}
        ${alliesHtml}
        ${enemiesHtml}
        
     
      <img class="picture" src=${imageUrl}></img><br>
     
    
      </div>`;
      
  }).join("");

  htmlShow.innerHTML = allHtmlShowInfos;
}

displayNames(dataListDisney);

