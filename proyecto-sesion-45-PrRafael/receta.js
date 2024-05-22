// // let recetario =[];

// // //AGREGA UN ELEMENTO NUEVO AL ARREGLO
// // function agregarReceta (){
// //     let recetas = {
// //         nombre : "",        //Aqui es donde creo mi arreglo tipo json
// //         preparacion : "",
// //         ingredientes: "",
// //         }
// //     }
// //      recetas.nombre = nombreReceta = document.getElementById("nombreReceta")
// //      recetas.preparacion = preparacionReceta = document.getElementById("preparacionReceta")//en estad parte es donde 
// //      recetas.ingredintes =  ingredientesReceta = document.getElementById("ingredientesReceta")//copeo todos mis ad 

// //       recetas.push(rectas) //Aqui para que me agrege mi variables recetas
// //     // const nuevaReceta = nombreReceta.value.trim(); // OBTENER EL VALOR DEL INPUT Y ELIMINAR ESPACIOS EN BLANCO

// //     // if (nuevaReceta) {
// //     //     recetario.push(nuevaReceta); //SOLO AGREGA SI EL INPUT NO ESTA VACIO
// //     //     listaReceta();
// //     //     nombreReceta.value = ""; //LIMPIA EL INPUT DESPUES DE DARLE CLICK AL BOTTON
// //     // } else {
// //     //     alert("Este campo no puede quedar vasio") // ALERTA SI EL INPUT ESTA VACIO
// //     // }
// // }

// // //ACTUALIZA LA LISTA EN DOM
// // function listaReceta() {
// //     const itemListReceta = document.getElementById("itemListReceta")
// //     itemListReceta.innerHTML = "";
// //     recetario.forEach((item, index) => {
// //         const li = document.createElement("li");//li lista organizada
// //         li.textContent = item;

// //         //CREA EL BOTON DE ELIMINAR
// //         const deleteButton = document.createElement("button");
// //         deleteButton.textContent = "Eliminar";
// //         deleteButton.addEventListener("click", () => {
// //             removeItem(index);
// //     });
        
// //     //AÑADE EL BOTON DE ELIMINAR EL ELEMENTO A LA LISTA
// //         li.appendChild(deleteButton);
// //         itemListReceta.appendChild(li)
// //     });
// // }

// // // ELIMINA UN ELEMTO DEL ARREGLO
// // function removeItem(index) {
// //     recetario.splice(index, 1);
// //     listaReceta();
// // }

// // //ASIGNA EL EVENTO CLICK AL BOTON
// // document.getElementById("addButton").addEventListener("click", addRecet);
let recetas = [];//aqui comenzamos a declrar la variables


window.onload = function() {
    if (localStorage.getItem("recetas")) {
        recetas = JSON.parse(localStorage.getItem("recetas"));
        mostrarRecetas();
    }
}

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
    receta.preparacion = document.getElementById("preparacionReceta").value;
    receta.ingredientes.nombre = document.getElementById("nombreIngrediente").value;
    receta.ingredientes.cantidad = document.getElementById("cantidadIngrediente").value;
//en estos casos es donde comienzo a llamar cada ad de mi html con los nombres que necesito
    recetas.push(receta);//para que me agregue

    let listaRecetas = document.getElementById("listaRecetas");
    let datosReceta = document.createElement("li");
    datosReceta.innerHTML = receta.nombre;
    datosReceta.innerHTML += "\n";

    listaRecetas.appendChild(datosReceta)

    let listaPreparacion = document.getElementById("listaPreparacion");
    let datosPreparacion = document.createElement("ol");
    datosPreparacion.innerHTML += receta.preparacion;
    datosReceta.innerHTML += "\n";

    listaPreparacion.appendChild(datosPreparacion)

    let listaIngredientes = document.getElementById("listaIngredientes");
    let datosIngrediente = document.createElement("ol");
    datosIngrediente.innerHTML += receta.ingredientes.nombre;
    datosIngrediente.innerHTML += receta.ingredientes.cantidad;
    datosReceta.innerHTML += "\n";

    listaIngredientes.appendChild(datosIngrediente)

    let listaCantidad = document.getElementById("listaCantidad");
    let datosCantidad = document.createElement("ol");
    datosCantidad.innerHTML += receta.ingredientes.cantidad;
    datosReceta.innerHTML += "\n";

    listaCantidad.appendChild(datosCantidad)


    document.getElementById("nombreReceta").value = "";
    document.getElementById("preparacionReceta").value = "";
    document.getElementById("nombreIngrediente").value = "";
    document.getElementById("cantidadIngrediente").value = "";
    
} 

function EliminarReceta() {
    recetas.pop()

    let listaRecetas = document.getElementById("listaRecetas");
    listaRecetas.removeChild(listaRecetas.lastChild)
}
// // Espera a que el DOM esté completamente cargado
// document.addEventListener("DOMContentLoaded", function() {
//     // Agregar listener para el botón de agregar ingrediente
//     document.getElementById("agregarIngrediente").addEventListener("click", agregarIngrediente);

//     // Agregar listener para el formulario de receta
//     document.getElementById("formaReceta").addEventListener("submit", guardarReceta);

//     // Agregar listeners para eliminar recetas
//     var listaRecetas = document.getElementById("recipe-list");
//     listaRecetas.addEventListener("click", function(event) {
//         if (event.target.classList.contains("eliminarReceta")) {
//             eliminarReceta(event.target.parentElement);
//         }
//     });
// });

// function agregarIngrediente() {
//     // Crear elementos de input para el nuevo ingrediente
//     var divIngredientes = document.createElement("div");
//     divIngredientes.classList.add("ingredientes");

//     var inputNombre = document.createElement("input");
//     inputNombre.type = "text";
//     inputNombre.classList.add("nombreIngrediente");
//     inputNombre.placeholder = "Ingrediente";
//     inputNombre.required = true;

//     var inputCantidad = document.createElement("input");
//     inputCantidad.type = "text";
//     inputCantidad.classList.add("cantidadIngrediente");
//     inputCantidad.placeholder = "Cantidad";
//     inputCantidad.required = true;

//     // Agregar los inputs al div de ingredientes
//     divIngredientes.appendChild(inputNombre);
//     divIngredientes.appendChild(inputCantidad);

//     // Obtener el contenedor de la lista de ingredientes y agregar el nuevo ingrediente
//     var listaIngredientes = document.querySelector(".listaIngredientes");
//     listaIngredientes.appendChild(divIngredientes);
// }

// function guardarReceta(event) {
//     event.preventDefault(); // Evitar que se envíe el formulario

//     // Obtener los valores del formulario
//     var nombreReceta = document.getElementById("nombreReceta").value;
//     var preparacionReceta = document.getElementById("preparacionReceta").value;
//     var listaIngredientes = [];

//     // Recorrer todos los elementos de ingredientes
//     document.querySelectorAll(".ingredientes").forEach(function(ingrediente) {
//         var nombreIngrediente = ingrediente.querySelector(".nombreIngrediente").value;
//         var cantidadIngrediente = ingrediente.querySelector(".cantidadIngrediente").value;
        
//         // Verificar que se hayan ingresado ambos valores
//         if (nombreIngrediente && cantidadIngrediente) {
//             listaIngredientes.push({
//                 nombre: nombreIngrediente,
//                 cantidad: cantidadIngrediente
//             });
//         }
//     });

//     // Crear un objeto con los datos de la receta
//     var receta = {
//         nombre: nombreReceta,
//         preparacion: preparacionReceta,
//         ingredientes: listaIngredientes
//     };

//     // Agregar la receta a la lista de recetas en la vista previa
//     mostrarRecetaEnVistaPrevia(receta);

//     // Limpiar el formulario después de guardar la receta
//     limpiarFormulario();
// }

// function mostrarRecetaEnVistaPrevia(receta) {
//     // Crear elementos HTML para mostrar la receta en la vista previa
//     var recetaHTML = document.createElement("div");
//     recetaHTML.classList.add("receta");

//     var nombreRecetaHTML = document.createElement("h3");
//     nombreRecetaHTML.textContent = receta.nombre;

//     var preparacionRecetaHTML = document.createElement("p");
//     preparacionRecetaHTML.textContent = "Preparación: " + receta.preparacion;

//     var listaIngredientesHTML = document.createElement("ul");
//     receta.ingredientes.forEach(function(ingrediente) {
//         var ingredienteHTML = document.createElement("li");
//         ingredienteHTML.textContent = ingrediente.nombre + ": " + ingrediente.cantidad;
//         listaIngredientesHTML.appendChild(ingredienteHTML);
//     });

//     // Crear un botón para eliminar la receta
//     var btnEliminarReceta = document.createElement("button");
//     btnEliminarReceta.textContent = "Eliminar Receta";
//     btnEliminarReceta.classList.add("eliminarReceta");

//     // Agregar elementos HTML al contenedor de la lista de recetas
//     recetaHTML.appendChild(nombreRecetaHTML);
//     recetaHTML.appendChild(preparacionRecetaHTML);
//     recetaHTML.appendChild(listaIngredientesHTML);
//     recetaHTML.appendChild(btnEliminarReceta);

//     // Obtener el contenedor de la lista de recetas y agregar la nueva receta
//     var listaRecetas = document.getElementById("recipe-list");
//     listaRecetas.appendChild(recetaHTML);
// }

// function eliminarReceta(receta) {
//     receta.remove();
// }

// function limpiarFormulario() {
//     document.getElementById("nombreReceta").value = "";
//     document.getElementById("preparacionReceta").value = "";
//     document.querySelectorAll(".ingredientes").forEach(function(ingrediente) {
//         ingrediente.parentNode.removeChild(ingrediente);
//     });
// }
