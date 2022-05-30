const addTaskBtn = document.querySelector('#add-task-btn');
const deleteTasksBtn = document.querySelector('#delete-tasks-btn');
let taskInput = document.querySelector('#task');
let taskCollection = document.querySelector('#collection');
const taskForm = document.querySelector('#task-form')

loadEventListeners();

function loadEventListeners() {
    taskForm.addEventListener('submit', addTask)
}

function addTask(e) {
    if(taskInput.value === '') {
        alert('Add task bar cannot be empty')
        return null
    }
    console.log(taskInput.value);
    const ul = document.createElement('ul');
    let taskContent = document.createTextNode(taskInput.value)
    ul.style.border = '1px solid gray';
    ul.style.margin = '10px 10px' ;
    ul.style.paddingRight = '55px'
    ul.appendChild(taskContent);
    console.log(taskContent);
    console.log(ul);
    taskCollection.appendChild(ul);
    if(taskInput.value =! ''){
        taskInput.value = '';
    };

    
    e.preventDefault()
    
}

