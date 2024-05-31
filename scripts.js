// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);
    todoList.addEventListener('click', deleteTodo);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.className = 'todo-item';
            li.innerHTML = `
                <span>${todoText}</span>
                <button class="delete-btn">&times;</button>
            `;
            todoList.appendChild(li);
            todoInput.value = '';
        }
    }

    function deleteTodo(e) {
        if (e.target.classList.contains('delete-btn')) {
            const li = e.target.parentElement;
            todoList.removeChild(li);
        }
    }
});
