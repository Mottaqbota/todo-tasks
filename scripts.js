const cardTasks = document.querySelector(".card-tasks");
const inputTask = document.getElementById("add-input");
var arrayTasks = [
    getStorageTasks
] 

var getStorageTasks = JSON.parse(localStorage.getItem('Tasks'));

// if (localStorage.getItem('Tasks') !== null) {
//     localStorage.setItem('Tasks', "a")
// } else {
//     return;
// }


function addNewTask() {
  if (inputTask.value == "") {
    alert("Insira uma tarefa válida!")
  } else {
    alert("Tarefa Adicionada com sucesso!")
    cardTasks.innerHTML += `
    <div class="list-task">
        <input type="checkbox" onclick="completeTask()">
        <p>${inputTask.value}</p>
        <button onclick="remTask(taskToRemove)"><ion-icon name="trash"></ion-icon>REMOVER</button>
    </div>
      `
    }
    arrayTasks.push(
        {
            nameTask: inputTask.value,
            isTaskComplete: false
        }
    ) 
    
    var newArrayTasks = JSON.stringify(arrayTasks);

    localStorage.setItem('Tasks', newArrayTasks);

    console.log(JSON.parse(localStorage.getItem('Tasks')));
}

function completeTask() {
    if (arrayTasks.isTaskComplete == false) {
        var resultado = arrayTasks.map(() => ({ isTaskComplete: true }));
    } else {
        var resultado = arrayTasks.map(() => ({ isTaskComplete: false }));
        // arrayTasks.forEach(item => {
        //     item.isTaskComplete = false;
        // });
    }
      
    console.log(resultado)
}



function showTasks() {
    for(let i = 0; i < arrayTasks.length; i++) {
        cardTasks.innerHTML += `
        <div class="list-task">
            <input type="checkbox">
            <p>${arrayTasks[i].nameTask}</p>
            <button onclick="remTask(taskToRemove)"><ion-icon name="trash"></ion-icon>REMOVER</button>
        </div>
        `
    }

}   
showTasks()

// var getTasks = JSON.parse.localStorage.getItem('Tasks');

// const checkbox = document.querySelector(".chk-task");
// const listTask = document.querySelector(".list-task");

// function toggleTaskBackground() {
//   if (checkbox.checked) {
//     listTask.classList.add("checked");
//   } else {
//     listTask.classList.remove("checked");
//   }
// }
// checkbox.addEventListener("change", toggleTaskBackground);
