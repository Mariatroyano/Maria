const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click",()=>{//al darle cli abre el boton
     nav.classList.add("visible");
})

cerrar.addEventListener("click",()=>{// al darle
    nav.classList.remove("visible");

})
//to permite agregar o quitar 