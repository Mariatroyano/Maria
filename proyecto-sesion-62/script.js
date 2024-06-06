const body1 = document.getElementById("body1")
const boton = document.getElementById("boton1");
console.log(boton);

boton.addEventListener("mouseover", cambiarClase);
boton.addEventListener("mouseout", cambiarClase2);


function cambiarClase() {
    body1.setAttribute("class", "backgroundcolorblue")
}
function cambiarClase2() {
    body1.setAttribute("class", "backgroundcolorred")
}

