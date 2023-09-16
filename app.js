let todos = JSON.parse(localStorage.getItem('todos'));
function add() {
    const input = document.getElementById('input');
    const todo = input.value;
    if (todo !== '') {
        todos.push({
            name: todo,
            completed: false
        });
        input.value = '';
        display();
    }
}
function display() {
    const ul = document.getElementById('ul');
    ul.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${index})">
            <label style="${todo.completed ? 'text-decoration: line-through;' : ''}">${todo.name}</label>
        `;
        ul.appendChild(li);
    });
    saveTodos();
}
function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    display();
}
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
window.addEventListener('DOMContentLoaded', display);

