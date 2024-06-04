const input = document.querySelector(`input`);// devuelve el primer elemento del documento
const button = document.querySelector(`button`);// devuelve el primer elemento del documento
const ul = document.querySelector('ul');// devuelve el primer elemento del documento
const vacio = document.querySelector(`vacio`)// devuelve el primer elemento del documento


button.addEventListener('click', (e) => {//el  even es el que registra un evento
    e.preventDefault()//para que cuando le de agregar no me recargue la pagina y lo hace es por  estad dentro del from en el html


    const text = input.value;//para que me traiga el valor del input

    const li = document.createElement('li');
    const p = document.createElement(`p`);
    p.textContent = text;

    li.appendChild(p);//para que me agregue
    li.appendChild(EliminarTarea());
    ul.appendChild(li);


    input.value = "";//para que cada que le demos agregar el imput quede en blanco pa volver a escribir no tengamos que borrarala cada que bayamos agregar algo
});
function EliminarTarea() {//Para que me de la forma de eliminar una tarea
    const EliminarTarea = document.createElement('button');

    EliminarTarea.textContent = "Eliminar";

    EliminarTarea.addEventListener('click', (e) => {
        const item = e.target.parentElement;//el target se refiere al boton de eliminar
        ul.removeChild(item);

    })
    return EliminarTarea;

}
