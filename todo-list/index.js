const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('todo-form');
const logsContainer = document.querySelector('.logs');

let todos = [];

addBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!todoInput.value) {
        alert("field is required");
        return;
    }
    todos.push({ todo: todoInput.value, id: todos.length + 1 });
    todoInput.value = "";
    renderHtml(todos);
});

function renderHtml(data) {
    console.log(data)
    let output = data.map((item, index) => {
        return `<div class="log">
                <div class="text">
                  ${item.todo}
                </div>
                <div class="btn">
                <button id="update" data-index="${index}">update</button>
                <button id="delete" data-index="${index}">Delete</button>
                </div>
                </div>
                `
    }).join("");

    logsContainer.innerHTML = output;
}

logsContainer.addEventListener('click', (e) => {
    if (e.target.id === 'delete') {
        const target = parseInt(e.target.dataset.index);
        console.log(target)
        todos.splice(target, 1);
        console.log(todos)
        renderHtml(todos);
    } else if (e.target.id === 'update') {
        const target = parseInt(e.target.dataset.index);
        const todoItem = todos[target];
        const newTodo = prompt('Enter new todo:', todoItem.todo);
        if (newTodo) {
            todoItem.todo = newTodo;
            renderHtml(todos);
        }
    }
});
