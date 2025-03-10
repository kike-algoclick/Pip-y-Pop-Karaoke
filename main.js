// Conexión con HTMl (Seleccionar elementos)

const songForm = document.getElementById('song_form');
const playList = document.getElementById('play_list');


// Función para agregar una canción a la lista

function addSong(songName, artistName, songUrl) {
    const listSong = document.createElement('li');
    listSong.setAttribute('class', 'bg-purple-500 p-5 rounded-md w-full')
    listSong.innerHTML = `
            <strong> ${songName} </strong> - ${artistName} 
            <a class=" text-blue-700 hover:underline ml-3 mr-3" href="${songUrl}" target="_blank" >Reproducir</a>
            <button class="delete-btn p-1 bg-red-500 rounded-sm shadow-lg shadow-red-400/40" >Eliminar</button> 
    `;
    //Agregar al html
    playList.appendChild(listSong);
    const deleteButton = listSong.querySelector('.delete-btn')
    deleteButton.addEventListener('click', ()=>{
        playList.removeChild(listSong)
    });
   



}

//Manejo de envio de formularios (Eventos)

songForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //Obtener datos del formulario
    const songName = document.getElementById("song_name").value;
    const artistName = document.getElementById("artist_name").value;
    const songUrl = document.getElementById("url_song").value;

    addSong(songName, artistName, songUrl);

    songForm.reset();
})