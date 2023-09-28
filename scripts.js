const inputTask = document.getElementById("add-input");
const cardTasks = document.querySelector(".card-tasks");
var arrayTasks = [];

function addNewTask() {
    if (inputTask.value == '') {
        alert('Insira o nome de sua tarefa!');
        return;
    }

    var newArrayTask = { nameTask: inputTask.value, isTaskComplete: false };
    arrayTasks.push(newArrayTask);
    inputTask.value = '';

    var newTask = document.createElement('label');
    newTask.classList.add('list-task');
    newTask.innerHTML = `
        <input type="checkbox">
        <p>${newArrayTask.nameTask}</p>
        <button onclick="remTask(this)"><ion-icon name="trash"></ion-icon>REMOVER</button>
    `;
    cardTasks.appendChild(newTask);

    const checkbox = newTask.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function () {
        const taskName = newArrayTask.nameTask;
        const task = arrayTasks.find(tsk => tsk.nameTask === taskName);

        if (task) {
            task.isTaskComplete = this.checked;
            newTask.classList.toggle("checked")
        }

        console.log(arrayTasks);
    });

    updateLocalStorage();
}

inputTask.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addNewTask();
    }
});


function remTask(button) {
    const taskName = button.parentElement.querySelector('p').textContent;
    const taskIndex = arrayTasks.findIndex(tsk => tsk.nameTask === taskName);

    if (taskIndex !== -1) {
        button.parentElement.classList.add('delete');
        setTimeout(() => {
            arrayTasks.splice(taskIndex, 1);
            button.parentElement.remove();
            updateLocalStorage();
        }, 500);
        setTimeout(() => {
            button.parentElement.classList.remove('delete');
        }, 1000);
    }
}

function updateLocalStorage() {
    var newArrayTasks = JSON.stringify(arrayTasks);
    localStorage.setItem('Tasks', newArrayTasks);
    console.log(arrayTasks);
}

var storedTasks = localStorage.getItem('Tasks');
if (storedTasks) {
    arrayTasks = JSON.parse(storedTasks);
    for (let i = 0; i < arrayTasks.length; i++) {
        
        cardTasks.innerHTML += `
        <label class="list-task">
            <input type="checkbox">
            <p>${arrayTasks[i].nameTask}</p>
            <button onclick="remTask(this)"><ion-icon name="trash"></ion-icon>REMOVER</button>      
        </label>
        `;
    }
}

// function completeTask() {
//     const checkbox = .querySelector('input[type="checkbox"]');
//     checkbox.addEventListener('change', function () {
//         const taskName = newArrayTask.nameTask;
//         const task = arrayTasks.find(tsk => tsk.nameTask === taskName);

//         if (task) {
//             task.isTaskComplete = this.checked;
//             .classList.toggle("checked")
//         }

//         console.log(arrayTasks);
//     });

// }
