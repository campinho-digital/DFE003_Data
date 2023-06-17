const albumSelect = document.getElementById('album-select');
const albumCover = document.getElementById('album-cover');
const playlist = document.getElementById('playlist');
const audioPlayer = document.getElementById('audio-player');

let albums = [];

// Carrega o arquivo JSON
function loadJSON(callback) {
  const load_json = new XMLHttpRequest();
  load_json.overrideMimeType('application/json');
  load_json.open('GET', 'data/beatles_songs/beatles_songs.json', true); //aqui é onde fica o caminho do arquivo Json
  load_json.onreadystatechange = function () {
    if (load_json.readyState === 4 && load_json.status === 200) {
      callback(JSON.parse(load_json.responseText));
    }
  };
  load_json.send(null);
}

// Função para carregar as músicas do álbum selecionado
function loadAlbum() {
  const selectedAlbum = albums[albumSelect.selectedIndex - 1]; // Subtrai 1 do índice selecionado, assim o player começa como 1 álbum e não no select

  // Verifica se há um álbum selecionado
  if (selectedAlbum) {
    // Atualiza a capa do álbum
    albumCover.src = selectedAlbum.cover; //cover, nome deorigem da capa do album

    // Limpa a lista de músicas
    playlist.innerHTML = '';

    // Adiciona as músicas do álbum na lista
    for (const song of selectedAlbum.songs) {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = song.title;
      span.addEventListener('click', () => {
        playSong(song.file); //aqui ele pega os arquivos de musica
      });
      li.appendChild(span);
      playlist.appendChild(li);
    }
  }
}

// Reproduz a música selecionada
function playSong(file) {
  audioPlayer.src = file;
  audioPlayer.play();
}

// Callback para processar o arquivo JSON
function processJSON(data) {
  albums = data;

  // Adiciona os álbuns ao select
  for (const album of albums) {
    const option = document.createElement('option');
    option.value = album.name;
    option.textContent = album.name;
    albumSelect.appendChild(option);
  }

  // Evento para carregar as músicas do álbum selecionado ao alterar o select
  albumSelect.addEventListener('change', loadAlbum);

  // Carrega o primeiro álbum ao iniciar a página
  loadAlbum();
}

// Carrega o arquivo JSON e inicia o processamento
loadJSON(processJSON);