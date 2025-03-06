//conexion con Html (seleccionar elementos)
const songForm = document.getElementById('song_form');
const playList = document.getElementById('play_list');

//función para agregar una cancion a la lista
function addSong(songName, artistName, songUrl){
    const listSong = document.createElement('li');
    listSong.setAttribute('class','')
    listSong.innerHTML = `
    <strong>${songName}</strong>
    -${artistName}
    <a href="${songUrl}" target="_blank">Reproducir</a>
    <button class="delete-btn bg-blue-300 p-4 rounded-sm">Eliminar</button>
    `

    //agregar al HTML
    playList.appendChild(listSong);
    
    const deleteButton = listSong.querySelector('.delete-btn')
    deleteButton.addEventListener('click', ()=>{
        playList.removeChild(listSong)
    });

}

//Manejo de envio de formulario (Eventos);
songForm.addEventListener('submit',(event)=>{
    event.preventDefault();

    //obtener datos del formulario
    const songName = document.getElementById('song_name').value;
    const artistName = document.getElementById('artist_name').value;
    const songUrl = document.getElementById('url_song').value;

    addSong(songName, artistName, songUrl);

    songForm.reset();   
})