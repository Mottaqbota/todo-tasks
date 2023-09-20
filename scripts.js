const checkbox = document.getElementById("chk-task");
const listTask = document.querySelector(".list-task");
const inputTask = document.getElementById("add-input").value;

function toggleTaskBackground() {
  if (checkbox.checked) {
    listTask.classList.add("checked");
  } else {
    listTask.classList.remove("checked");
  }
}
checkbox.addEventListener("change", toggleTaskBackground);

var arrayTasks = [
  { 
    nameTask = "Fazer Café",
    isTaskComplete = false
  }

]

function addNewTask() {
  listTask.innerHTML += `
  <p>${arrayTasks.nameTask}</p>
  `
}
