// Obtener los elementos
const audio = document.getElementById("audio");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const volumeSlider = document.getElementById("volume-slider");
const lines = document.querySelectorAll(".line");
const faceSvg = document.getElementById("aFace");

document.addEventListener('DOMContentLoaded', () => {
    lines.forEach(line => {
        line.style.animationPlayState = "paused";
    });
});

// Inicializar el volumen del audio según el valor del slider
audio.volume = volumeSlider.value; 

// Añadir después de las declaraciones iniciales (línea 10)
audio.addEventListener('ended', () => {
    console.log('Audio terminado');
    
    // Mostrar botón de play y ocultar pause
    playButton.style.display = "inline";
    pauseButton.style.display = "none";
    
    // Detener animaciones
    lines.forEach(line => {
        line.style.animationPlayState = "paused";
    });
    faceSvg.style.animationPlayState = "paused";
});

// Asegurarse de que el audio no se reproduce en bucle
audio.loop = false;

// Función para reproducir el audio
playButton.addEventListener("click", () => {
    audio.play();
    playButton.style.display = "none";
    pauseButton.style.display = "inline";
    // Iniciar animaciones
    lines.forEach(line => {
        line.style.animationPlayState = "running";
    });
    faceSvg.style.animationPlayState = "running";
});

// Función para pausar el audio
pauseButton.addEventListener("click", () => {
    audio.pause();
    playButton.style.display = "inline";
    pauseButton.style.display = "none";
    // Detener animaciones
    lines.forEach(line => {
        line.style.animationPlayState = "paused";
    });
    faceSvg.style.animationPlayState = "paused";
});

// Control del volumen
volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});

// Recargar la página al hacer clic en el icono de recarga
document.getElementById("reload-icon").addEventListener("click", function() {
    location.reload();
});