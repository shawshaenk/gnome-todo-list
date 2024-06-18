let taskBox = document.getElementById("task-box");
let form = document.getElementById("checklist");
let counter = 1;

taskBox.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
        let taskName = taskBox.value;
        let newTask = document.createElement('input');
        newTask.type = 'checkbox';
        newTask.id = 'task' + counter;
        newTask.name = taskName;
        newTask.value = taskName;
        form.appendChild(newTask);

        let newTaskLabel = document.createElement('label');
        newTaskLabel.htmlFor = 'task' + counter;
        newTaskLabel.textContent = taskName;
        form.appendChild(newTaskLabel);

        let removeButton = document.createElement('button');
        removeButton.className = 'remove';
        removeButton.id = counter;
        removeButton.textContent = '⨉';
        form.appendChild(removeButton);

        let br = document.createElement('br');
        form.appendChild(br);

        removeButton.addEventListener('click', function() {
            newTask.remove();
            newTaskLabel.remove();
            removeButton.remove();
            br.remove();
        });

        taskBox.value = '';
        counter += 1;
    }
});

