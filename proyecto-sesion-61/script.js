const input = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.getElementById("ul");

button.addEventListener('click', (e) => {//el  even me indica que registre que me agrgue el evento la tarea cn un click
    e.preventDefault()//lo indique para q cuando le diera agregar no me cargara la pagina
//la e puede ser caalquier otro nombre le puse e de evento

    const text = input.value;//para que me traiga el valor del input y me lo acoja hay
    const li = document.createElement('li');//agrego una constante llamada li que es de mi listadonde cada que agregue seme va estar agregando en lista
    const p = document.createElement(`p`);//y pz me va agregar en forma de parrafito
    p.textContent = text;// Asigna el valor del input (almacenado en la variable 'text') como el contenido de texto del párrafo ('p') creado anteriormente.

    li.appendChild(p);//para que me p me lo agregue a li que me pase el elemnto
    //para que cada que agregue una tarea me la agregue a un tarea nueva
    li.appendChild(EliminarTarea());//para que me elimine el elemento que deseemos por eso los parentesis vacios
    ul.appendChild(li);

    input.value = "";//para que cada que le demos agregar el imput quede en blanco pa volver a escribir no tengamos que borrarala cada que bayamos agregar algo
});
function EliminarTarea() {//Para que me de la forma de eliminar una tarea
    const EliminarTarea = document.createElement('button');

    EliminarTarea.textContent = "Eliminar";//para que seme agregue el button en cada tarea que agregue
    EliminarTarea.addEventListener('click', (e) => {//que a la hora de dar click me elimine
        const item = e.target.parentElement;//el target se refiere al boton de eliminar paq me acceda al en padre
        ul.removeChild(item);///ested es pa q me quite un boton en especifico

    })
    return EliminarTarea;//paq me retorne mi ultima funcion

}
