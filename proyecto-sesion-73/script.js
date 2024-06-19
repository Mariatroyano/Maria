const input = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.getElementById("ul");
let arrayTareas = []/*donde creo mi variable para el local storage*/

button.addEventListener('click', (e) => {
    e.preventDefault()

    const text = input.value;

    if (text != "") {
        const li = document.createElement('li');
        const p = document.createElement(`p`);

        arrayTareas.push(text)
        console.log(arrayTareas)

        const CompletarTarea = document.createElement('button');/*aqui es donde me hace para que a la hora de darle cliclk me cambie como agregado*/
        CompletarTarea.textContent = "X";
        CompletarTarea.style.backgroundColor = "#ff0000"
        li.innerHTML = `${text}`;/**/

        li.appendChild(CompletarTarea);
        li.appendChild(EliminarTarea());
        ul.appendChild(li)

        CompletarTarea.addEventListener("click", function () {
            CompletarTarea.style.backgroundColor = "#00ff00"
            CompletarTarea.textContent = "✔";
        })
        window.localStorage.setItem("listaTareas",arrayTareas)/*donde agrego mi local storage*/

        const arrayLocalstorage = window.localStorage.getItem("listaTareas",arrayTareas)/*creo una constante para q me agregue*/
        console.log(arrayLocalstorage)

        input.value = "";
    }
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
