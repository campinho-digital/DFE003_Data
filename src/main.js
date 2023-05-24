

//fetch para buscar arquico dados
fetch("./data/beatles_songs/beatles_songs.json").then(res => res.json())
.then(data => {
    const lista = document.getElementById('content');

data.forEach(item => {
    
    
    const id = document.createElement('li');
    id.textContent = item.id;
    lista.appendChild(id);
    id.style.padding = '10px';
    id.style.backgroundColor ='gray';
    id.style.borderBottom = '1px solid white';
    id.style.fontSize = '2rem';
    id.style.color = 'gold';
    id.style.marginTop = "50px";
    id.style.borderRadius = "10px";


    const li = document.createElement('li');
    li.textContent = item.name;
    lista.appendChild(li);
    li.style.padding = '10px';
    li.style.backgroundColor ='gray';
    li.style.borderBottom = '1px solid white';
    li.style.fontSize = '2rem';
    li.style.color = 'yellow';
    li.style.borderRadius = "10px";

    
    const cover = document.createElement('img');
    cover.src = item.cover;
    cover.style.width = "500px";
    lista.appendChild(cover)
    cover.style.padding = '20px';

    
        
    const tracks = document.createElement('div');
    tracks.textContent = item.tracks;
    lista.appendChild(tracks);
    tracks.style.padding = '50px';
    tracks.style.backgroundColor ='gray';
    tracks.style.fontSize = '1.2rem';
    tracks.style.color = 'white';
    tracks.style.maxWidth = 'auto';
    tracks.style.borderBottom = '1px solid white';


    
    
});

})
