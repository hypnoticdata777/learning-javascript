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

function renderTasks() {
    console.log('Rendering tasks:', tasks);
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