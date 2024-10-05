    

        // Wait for the DOM to fully load
        document.addEventListener('DOMContentLoaded', () => {
        
            const addButton = document.getElementById('add-task-btn');
            const taskInput = document.getElementById('task-input');
            const taskList = document.getElementById('task-list');
    
            function addTask() {
                // Get and trim the input value
                const taskText = taskInput.value.trim();
    
                // Check if input is empty
                if (taskText === "") {
                    alert("Please enter a task.");
                    return;
                }
    
                // Create a new list item
                const li = document.createElement('li');
                li.textContent = taskText;
    
                // Create a remove button
                const removeButton = document.createElement('button');
                removeButton.textContent = "Remove";
                removeButton.className = 'remove-btn';
    
                // Add click event to remove the task
                removeButton.onclick = function() {
                    taskList.removeChild(li);
                };
    
                // Append the remove button to the list item
                li.appendChild(removeButton);
                // Append the list item to the task list
                taskList.appendChild(li);
                // Clear the input field
                taskInput.value = '';
            }
    

            // Allow adding tasks by pressing Enter key
            taskInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    addTask();
                }
            });

            addButton.addEventListener('click', (event)=>{
                addTask(event);
                console.log("hello")
            })
        });
        