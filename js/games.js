let imagen = document.getElementById("imagen");
let right = document.getElementById("right");
let left = document.getElementById("left");
let titulo = document.getElementById("game-title");
let lanzamiento = document.getElementById("lanzamiento");
let desarrollador = document.getElementById("desarrollador");
let genero = document.getElementById("genero");

let titulos = ["Battlefield 2042", "Far Cry 6", "Fifa 22", "Final Fantansy VII", "Gran Turismo", "Hitman 3", "Horizon Forbidden West", "Ratchet & Clank: Una Dimensión Aparte", "Spiderman: Miles Morales", "Tales Of Arise"];

let imagenes = ["../img/battlefield_2042.jpeg", "../img/far_cry_6.jpeg", "../img/fifa_22.jpeg", "../img/final_fantasy.png", "../img/gran_turismo.jpeg", "../img/hitman_3.webp", "../img/horizon_forbidden_west.webp", "../img/ratchet_and_clank.jpeg", "../img/spiderman_miles.jpeg", "../img/tales_of_arise.jpeg"];

let lanzamientos = ["19/Noviembre/2021", "07/Octubre/2021", "01/Octubre/2021", "10/Junio/2021", "04/Marzo/2022", "20/Enero/2021", "18/Febrero/2022", "11/Junio/2021", "19/Noviembre/2020", "10/Septiembre/2021"],
desarrolladores = ["DICE", "Ubisoft", "Electronics Arts", "Square Enix", "Polyphony Digital", "IO Interactive", "Guerrilla Games", "Insomniac Games", "Insomniac Games", "Bandai Namco Studios"],
generos = ["Shooter en Primera Persona", "Acción-Aventura en Primera Persona", "Deportes", "Rol de Acción", "Simulación de Carreras", "Sigilo", "Rol de Acción", "Plataformas", "Acción-Aventura", "Rol de Acción"];


var contador = 0;
const forward = () => {
    contador++;

    if (contador > imagenes.length-1) {
        contador = 0;
    }
    imagen.src = imagenes[contador];
    titulo.innerHTML = titulos[contador];
    lanzamiento.innerHTML = lanzamientos[contador];
    desarrollador.innerHTML = desarrolladores[contador];
    genero.innerHTML = generos[contador];
}

const backward = () => {
    contador--;

    if (contador < 0) {
        contador = imagenes.length - 1;
        
    }
    imagen.src = imagenes[contador];    
    titulo.innerHTML = titulos[contador];
    lanzamiento.innerHTML = lanzamientos[contador];
    desarrollador.innerHTML = desarrolladores[contador];
    genero.innerHTML = generos[contador];
}

right.addEventListener("click", forward);
left.addEventListener("click", backward);


