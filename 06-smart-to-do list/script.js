let tasks = [];
let currentFilter = 'all';

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    
    tasks.push(newTask);
    taskInput.value = '';
    taskInput.focus();
    
    renderTasks();
    updateTaskCounter();
}

function toggleTask(taskId) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === taskId) {
            tasks[i].completed = !tasks[i].completed;
            break;
        }
    }
    renderTasks();
    updateTaskCounter();
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
    updateTaskCounter();
}

function setFilter(filter) {
    currentFilter = filter;
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    for (let i = 0; i < filterBtns.length; i++) {
        filterBtns[i].classList.remove('active');
    }
    
    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    activeBtn.classList.add('active');
    
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    const emptyState = document.getElementById('emptyState');
    
    taskList.innerHTML = '';
    
    const filteredTasks = getFilteredTasks();
    
    if (filteredTasks.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    }
    
    emptyState.classList.add('hidden');
    
    for (let i = 0; i < filteredTasks.length; i++) {
        const task = filteredTasks[i];
        
        const li = document.createElement('li');
        li.className = 'task-item';
        li.dataset.taskId = task.id;
        if (task.completed) {
            li.classList.add('completed');
        }
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed;
        
        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = task.text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        
        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        
        taskList.appendChild(li);
    }
}

function getFilteredTasks() {
    if (currentFilter === 'active') {
        return tasks.filter(task => !task.completed);
    } else if (currentFilter === 'completed') {
        return tasks.filter(task => task.completed);
    }
    return tasks;
}

function updateTaskCounter() {
    const activeTasks = tasks.filter(task => !task.completed).length;
    const taskCounter = document.getElementById('taskCounter');
    taskCounter.textContent = `${activeTasks} task${activeTasks !== 1 ? 's' : ''} remaining`;
}

document.getElementById('addBtn').addEventListener('click', addTask);

document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

document.getElementById('taskList').addEventListener('click', function(event) {
    const taskItem = event.target.closest('.task-item');
    if (!taskItem) return;
    
    const taskId = parseInt(taskItem.dataset.taskId);
    
    if (event.target.classList.contains('task-checkbox')) {
        toggleTask(taskId);
    } else if (event.target.classList.contains('delete-btn')) {
        deleteTask(taskId);
    }
});

const filterBtns = document.querySelectorAll('.filter-btn');
for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener('click', function() {
        const filter = this.dataset.filter;
        setFilter(filter);
    });
}