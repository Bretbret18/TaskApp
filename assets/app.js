const addTaskBtn = document.querySelector('#add-task-btn');
const deleteTasksBtn = document.querySelector('#delete-tasks-btn');
let taskInput = document.querySelector('#task');
let taskCollection = document.querySelector('#collection');
const taskForm = document.querySelector('#task-form');

addTaskBtn.style.backgroundColor = '#b5231b';



function loadEventListeners() {
    taskForm.addEventListener('submit', addTask)
    deleteTasksBtn.addEventListener('click', deleteTasks)
    
    
}

function addTask(e) {
    // create list element for new task
    const ul = document.createElement('ul');
     // Create remove Icon
    const removeIcon = document.createElement('a');
    removeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#b5231b" class="bi bi-file-x-fill" viewBox="0 0 16 16"><path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146 8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 1 1 .708-.708z"/></svg>'
    // Handle non value task entered
    if (taskInput.value === '') {
        alert('Add task bar cannot be empty')
        e.preventDefault()
    } else {
        // Create task input text within ul
        let taskContent = document.createTextNode(taskInput.value)
        // append task content to ul
        ul.appendChild(taskContent);
        // Add remove icon to ul behind text content
        console.log(ul);
        ul.append(removeIcon)
        // Push remove icon to end of ul and style
        removeIcon.style.float = 'right';
        removeIcon.style.cursor = 'pointer';
        // Add new task to task collection
        taskCollection.appendChild(ul);
        // if no text is entered, do not create ul
        if (taskInput.value = ! '') {
            taskInput.value = '';
        };

        removeIcon.addEventListener('click', function(e) {
            removeIcon.parentElement.remove()
        })

        e.preventDefault()
    }
}

function deleteTasks(e) {
    e.preventDefault()

   taskCollection.innerHTML = '';
}

loadEventListeners();