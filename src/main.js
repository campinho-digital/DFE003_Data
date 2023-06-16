import data from './data/animes/one_piece_quote.json' assert {
  type: "json"
}

const animes = document.getElementById("animes_one_piece")
const searchName = document.getElementById("search");

function pesquisar() {
  const termoPesquisa = searchName.value.toLowerCase().trim();
  animes.innerHTML = "";

  data.forEach(function (item) {
    const incluiTermoPesquisa = item.anime.toLowerCase().includes(termoPesquisa) || item.character.toLowerCase().includes(termoPesquisa) || item.quote.toLowerCase().includes(termoPesquisa);

    if (termoPesquisa === "" || incluiTermoPesquisa) {
      animes.innerHTML +=
        `
        <div class="cards">
          <div class="cardFlip">
            <div class="front">
              <figure>
                <img src="${item.img}" class="poster">
              </figure>
            </div>
            <div class="back">
              <h1>${item.anime}</h1>
              <p>${item.character}</p>
              <addr>${item.quote}</addr>
            </div>
          </div>
        </div>`;
    }
  });
}

searchName.addEventListener("input", pesquisar);

pesquisar();