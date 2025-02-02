document.getElementById("si-btn").addEventListener("click", function () {
    window.location.href = "lo_sabia.html";
});

// Función para mover el botón "No"
function moveNoButton() {
    const noBtn = document.getElementById("no-btn");
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * (window.innerHeight - noBtn.clientHeight) + "px";
    noBtn.style.left = Math.random() * (window.innerWidth - noBtn.clientWidth) + "px";
}

// Evento para móviles (touchstart)
document.getElementById("no-btn").addEventListener("touchstart", function (event) {
    event.preventDefault(); // Evita el comportamiento por defecto (como mantener presionado)
    moveNoButton();
});

// Evento para desktop (mouseover)
document.getElementById("no-btn").addEventListener("mouseover", function () {
    moveNoButton();
});


