const input = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.getElementById("ul");
let arrayTareas = []/*donde creo mi variable para el local storage*/
const arrayLocalstorage = window.localStorage.getItem("listaTareas")/*creo una constante para q me agregue*/
console.log(arrayLocalstorage)

let li = ""

if (arrayLocalstorage.length != 0) {

    arrayTareas.push(arrayLocalstorage.split(","));
    console.log(arrayTareas[0].length)
    for (i = 0; i < arrayTareas[0].length; i++) { 
        li = document.createElement('li');
        li.innerHTML = `${arrayTareas[0][i]}`;/*aqui lo agregamos como forma de array */
        ul.appendChild(li);
        const CompletarTarea = document.createElement('button');/*aqui es donde me hace para que a la hora de darle cliclk me cambie como agregado*/
        CompletarTarea.textContent = "X";
        CompletarTarea.style.backgroundColor = "#ff0000"
        li.appendChild(CompletarTarea);
        li.appendChild(EliminarTarea());
        CompletarTarea.addEventListener("click", function () {
            CompletarTarea.style.backgroundColor = "#00ff00"
            CompletarTarea.textContent = "✔";
        })
    }
}
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
        window.localStorage.setItem("listaTareas", arrayTareas)/*donde agrego mi local storage*/

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

