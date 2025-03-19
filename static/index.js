
// CONSTANTES SOBRE BOTONES
const input = document.getElementById("textoInput");
const button = document.getElementById("cambiarColorBtn");
const enviar = document.getElementById("enviarBtn");

// CONSTANTE SOBRE MODEL (VENTANA POPUP)
const modal = document.getElementById("miModal");
const modalTexto = document.getElementById("modalTexto");
const contenidoModal = document.getElementById("contenidoModal");
const cerrarModalBtn = document.getElementById("cerrarModalBtn");
const buttonColorModal = document.getElementById("cambiarColorModalBtn");


let colorIndex = 0;

// CREAMOS UN ARRAY DE OBJETOS CON LOS COLORES DE FONDO Y TEXTO

const colores = [
    { fondo: "white", texto: "black" },
    { fondo: "black", texto: "white" },
    { fondo: "lightblue", texto: "red" }
];

// FUNCION EL CUAL CAMBIA EL COLOR DE FONDO Y TEXTO
function cambiarColor() {
    const { fondo, texto } = colores[colorIndex];

    input.style.backgroundColor = fondo;
    input.style.color = texto;
    contenidoModal.style.backgroundColor = fondo;
    contenidoModal.style.color = texto;

    colorIndex = (colorIndex + 1) % colores.length;
}

// EVENTO PARA CUANDO DAMOS CLICK A ENVIAR
button.addEventListener("click", cambiarColor);

// EVENTO PARA CAMBIAR EL COLOR DE FONDO Y TEXTO DE LA VENTANA MODAL
buttonColorModal.addEventListener("click", cambiarColor);

// EVENTO EL CUAL MUESTRA EL MODAL (VENTANA POPUP)
enviar.addEventListener("click", () => {
    modalTexto.textContent = input.value;
    modal.style.display = "flex";
});

// CERRAR VENTANA MODAL
cerrarModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// CERRAR VENTANA AL DAR CLICK EN CUALQUIER OTRO LADO
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};