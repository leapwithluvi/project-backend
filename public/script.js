    const API_URL = '/todos';
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const todoList = document.getElementById('todo-list');

    async function fetchTodos() {
      const res = await fetch(API_URL);
      const todos = await res.json();
      todoList.innerHTML = '';
      todos.forEach(todo => renderTodo(todo));
    }

    function renderTodo(todo) {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.innerHTML = `
        <span class="flex-grow-1">${todo.task}</span>
        <div class="btn-group">
          <button class="btn btn-sm btn-warning" onclick="editTodoPrompt('${todo.id}', '${todo.task}')">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteTodo('${todo.id}')">Hapus</button>
        </div>
      `;
      todoList.appendChild(li);
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const task = taskInput.value.trim();
      if (!task) return;

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task })
      });
      const newTodo = await res.json();
      renderTodo(newTodo);
      taskInput.value = '';
    });

    async function deleteTodo(id) {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchTodos();
    }

    async function editTodoPrompt(id, oldTask) {
      const newTask = prompt('Edit todo:', oldTask);
      if (newTask && newTask.trim()) {
        await fetch(`${API_URL}/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ task: newTask.trim() })
        });
        fetchTodos();
      }
    }

    fetchTodos();