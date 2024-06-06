const input = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.getElementById("ul");

button.addEventListener('click', (e) => {
    e.preventDefault()

    const text = input.value;
    const li = document.createElement('li');
    const p = document.createElement(`p`);
    p.textContent = text;// Asigna el valor del 

    li.appendChild(p);
    li.appendChild(EliminarTarea());
    ul.appendChild(li);

    input.value = "";
});
function EliminarTarea() {
    const EliminarTarea = document.createElement('button');

    EliminarTarea.textContent = "Eliminar";
    EliminarTarea.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

    })
    return EliminarTarea;

}
