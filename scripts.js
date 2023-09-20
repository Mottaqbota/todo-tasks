// var arrayTasks = [
//   {
//     nameTask = "Fazer Café",
//     isTaksComplete = false
//   },
//   {
//     nameTask = "Arrumar o Quarto",
//     isTaksComplete = false
//   }
// ]


const cardTasks = document.getElementById("card-tasks");
const inputTask = document.getElementById("add-input");

function addNewTask() {
  if (inputTask.value == "") {
    alert("Insira uma tarefa válida!")
  } else {
    alert("Tarefa Adicionada com sucesso!")
      cardTasks.innerHTML += `
        <label class="list-task" for="chk-task">
          <input type="checkbox" id="chk-task">
          <p>${inputTask.value}</p>
          <button onclick="remTask()"><ion-icon name="trash"></ion-icon>REMOVER</button>
        </label>
      `
    }

}


const checkbox = document.querySelector(".chk-task");
const listTask = document.querySelector(".list-task");

function toggleTaskBackground() {
  if (checkbox.checked) {
    listTask.classList.add("checked");
  } else {
    listTask.classList.remove("checked");
  }
}
checkbox.addEventListener("change", toggleTaskBackground);
