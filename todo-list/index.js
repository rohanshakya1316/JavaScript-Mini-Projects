const form = document.querySelector(".form");
const input = document.querySelector(".input");
const listEl = document.querySelector(".list");

// State (single source of truth)
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// --------------------
// Render function
// --------------------
function renderTodos() {
  listEl.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    if (todo.checked) li.classList.add("checked");

    li.innerHTML = `
      ${todo.name}
      <span class="actions">
        <i class="fas fa-check-square check" data-id="${index}"></i>
        <i class="fas fa-trash delete" data-id="${index}"></i>
      </span>
    `;

    listEl.appendChild(li);
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

// --------------------
// Add task
// --------------------
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = input.value.trim();
  if (!value) return;

  todos.push({
    name: value,
    checked: false,
  });

  input.value = "";
  renderTodos();
});

// --------------------
// Event delegation (IMPORTANT)
// --------------------
listEl.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (e.target.classList.contains("check")) {
    todos[id].checked = !todos[id].checked;
  }

  if (e.target.classList.contains("delete")) {
    todos.splice(id, 1);
  }

  renderTodos();
});

// Initial render
renderTodos();