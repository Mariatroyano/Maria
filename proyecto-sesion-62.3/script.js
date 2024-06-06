const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2");

button1.addEventListener("click", AumentarTamaño);
button2.addEventListener("click", ReducirTamaño);

 function AumentarTamaño () {
    // let anchoImagen = document.getElementById('logo').width;
    document.getElementById('logo').width += 500;
 }
 function ReducirTamaño() {
    // let anchoImagen = document.getElementById('logo').width;
    document.getElementById('logo').width -= 50;
 }