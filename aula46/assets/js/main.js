const inputTask = document.querySelector('.inputtask');
const btnadd = document.querySelector('.btnaddtask');
const tasks = document.querySelector('.tasks');


inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

btnadd.addEventListener('click', function() {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.classList.contains('clear')) {
        el.parentElement.remove();
        saveTasks();
    }
});

function createLi() {
    const li = document.createElement('li');
    li.setAttribute('class', 'li');
    return li;
}

function createTask(inputText) {
    const li = createLi();
    li.innerText = inputText;
    tasks.appendChild(li);
    clearInput();
    createClearBtn(li);
    saveTasks();
}

function clearInput() {
    inputTask.value = '';
}

function createClearBtn (li) {
    li.innerText += ' ';
    const btnClear = document.createElement('button');
    btnClear.innerText = 'I did it!';
    btnClear.setAttribute('class', 'clear');
    btnClear.setAttribute('title', "It's done already?");
    li.appendChild(btnClear);
}

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const tasksList = [];
    
    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('I did it!', '').trim();
        tasksList.push(taskText);
    }
    
    const tasksJSON = JSON.stringify(tasksList);
    localStorage.setItem('backuptasks', tasksJSON);
}
function addSavedTasks() {
    const tasks = localStorage.getItem('backuptasks');
    const tasksList = JSON.parse(tasks);

    for (let task of tasksList) {
        createTask(task);
    }
}
addSavedTasks();