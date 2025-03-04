//conexion con Html (seleccionar elementos)
const songForm = document.getElementById('song_form');
const playList = document.getElementById('play_list');

//función para agregar una cancion a la lista
function addSong(songName, artistName, songUrl){
    const listSong = document.createElement('li');
    listSong.innerHTML = `
    <strong>${songName}</strong>
    -${artistName}
    <a href="${songUrl}" target="_blank">Reproducir</a>
    <buton class="delete-btn">Eliminar</buton>
    ;`

    //agregar al HTML
    playList.appendChild(listSong);

}

//Manejo de envio de formulario (Eventos);
songForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    //obtener datos del formulario
    const songName = document.getElementById('song_name').value;
    const artistName = document.getElementById('artist_name').value;
    const songUrl = document.getElementById('url_song').value;

    addSong(songName, artistName, songUrl);

    songForm.reset();   
})