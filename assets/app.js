const addTaskBtn = document.querySelector('#add-task-btn');
const deleteTasksBtn = document.querySelector('#delete-tasks-btn');
let tasks = document.querySelector('#tasks');
let taskField = document.querySelector('#task-field')

function addTask() {
    addTaskBtn.addEventListener('click', function(e) {
        const newTask = document.createElement('div')
        newTask.style.border = '1px solid grey'
        newTask.style.margin = '1%'
        const newContent = document.createTextNode('Hi');
        newTask.appendChild(newContent)
        console.log(newTask);
        tasks.appendChild(newTask)
    })
}

function deleteTasks() {
    deleteTasksBtn.addEventListener('click', function(e) {
        console.log(deleteTasksBtn);
    })
}

addTask()
deleteTasks()