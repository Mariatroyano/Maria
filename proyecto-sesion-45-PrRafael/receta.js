let recetas = JSON.parse(localStorage.getItem("recetas")) || [];//aqui  pongo mi local

function AgregarReceta() {
    let receta = {
        nombre: "",//aqui comienzo hacer una funcion para hacer un array tipo jhs
        preparacion: "",
        ingredientes: {
            nombre: "",
            cantidad: ""
        }
    }

    receta.nombre = document.getElementById("nombreReceta").value;
    receta.preparacion = document.getElementById("preparacionReceta").value;//en estos casos es donde comienzo a llamar cada  input ad de mi html con los nombres que necesito
    receta.ingredientes.nombre = document.getElementById("nombreIngrediente").value;
    receta.ingredientes.cantidad = document.getElementById("cantidadIngrediente").value;


    recetas.push(receta);//para que me agregue

    let RecetaNombre = receta.nombre
    let RecetaIngredientes = receta.ingredientes.nombre
    let RecetaCantidad = receta.ingredientes.cantidad


    let listaRecetas = document.getElementById("nomReceta");
    let datosReceta = document.createElement("ol");
    datosReceta.innerHTML += `<br/><p>Nombre Receta: ${RecetaNombre}</p>`


    listaRecetas.appendChild(datosReceta)//para agregar guardar


    let listaPreparacion = document.getElementById("listaPreparacion");
    let datosPreparacion = document.createElement("ol");
    datosPreparacion.innerHTML += "<br/><p>preparacion:</p>" + receta.preparacion;


    listaPreparacion.appendChild(datosPreparacion)//appendChilder para agregar guardar


    let listaIngredientes = document.getElementById("listaIngredientes");
    let datosIngrediente = document.createElement("ol");
    datosIngrediente.innerHTML += `<br><p>ingredientes: ${RecetaIngredientes}</p>`


    listaIngredientes.appendChild(datosIngrediente)

    let listaCantidad = document.getElementById("listaCantidad");
    let datosCantidad = document.createElement("ol");
    datosCantidad.innerHTML += `<br><p>cantidad: ${RecetaCantidad}</p>`


    listaCantidad.appendChild(datosCantidad)

    document.getElementById("nombreReceta").value = "";
    document.getElementById("preparacionReceta").value = "";
    document.getElementById("nombreIngrediente").value = "";
    document.getElementById("cantidadIngrediente").value = "";

}
let recetass = JSON.parse(localStorage.getItem("recetas")) || [];//en estad parte es donde termina mi local storas

function EliminarReceta() {
    let listaRecetas = document.getElementById("listaRecetas");
    listaRecetas.removeChild(listaRecetas.lastChild)

}