//conexion con Html (seleccionar elementos)
const songForm = document.getElementById('song_form');
const playList = document.getElementsById('play_list');

//función para agregar una cancion a la lista
function addSong(songName, artistName, songUrl){
    const listSong = document.createElement('li');
    listSong.innerHTML = `
    <strong>${songName}</strong>
    -${artistName}
    <a href="${songUrl}" target="_blank">Reproducir</a>
    ;`

}