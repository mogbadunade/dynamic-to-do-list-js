// Array to hold tasks
let tasks = [];

// Function to load tasks from Local Storage
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        tasks.forEach(task => {
            createTaskElement(task);
        });
    }
}

// Function to create a task element in the DOM
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');

    removeButton.onclick = function() {
        removeTask(taskText, li);
    };

    li.appendChild(removeButton);
    document.getElementById('task-list').appendChild(li);
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Add task to the array
    tasks.push(taskText);
    // Save tasks to Local Storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Create task element in the DOM
    createTaskElement(taskText);
    // Clear the input field
    taskInput.value = '';
}

// Function to remove a task
function removeTask(taskText, li) {
    // Remove from the tasks array
    tasks = tasks.filter(task => task !== taskText);
    // Update Local Storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Remove the li element from the DOM
    li.remove();
}

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    loadTasks(); // Load tasks when the page loads

    const addButton = document.getElementById('add-task-btn');
    addButton.addEventListener('click', (event)=>{
        addTask(event);
    })

    const taskInput = document.getElementById('task-input');
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});