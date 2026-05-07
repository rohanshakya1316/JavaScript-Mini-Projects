const form = document.querySelector(".form");
const input = document.querySelector(".input");
const listEl = document.querySelector(".list");

// Load from localStorage safely
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// ----------------------
// Render function (UI)
// ----------------------
function renderTodos() {
  listEl.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    li.className =
      "flex justify-between items-center bg-white px-4 py-3 rounded-lg shadow-sm transition hover:scale-[1.01]";

    const textClass = todo.checked
      ? "line-through text-gray-400"
      : "text-gray-800";

    li.innerHTML = `
      <span class="${textClass}">
        ${todo.name}
      </span>

      <div class="flex gap-3 text-lg">
        <i class="fas fa-check-square text-green-500 cursor-pointer check hover:scale-110 transition" data-id="${index}"></i>
        <i class="fas fa-trash text-red-500 cursor-pointer delete hover:scale-110 transition" data-id="${index}"></i>
      </div>
    `;

    listEl.appendChild(li);
  });

  // Sync with localStorage
  localStorage.setItem("todos", JSON.stringify(todos));
}

// ----------------------
// Add task
// ----------------------
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

// ----------------------
// Handle check & delete (event delegation)
// ----------------------
listEl.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  // Toggle completed
  if (e.target.classList.contains("check")) {
    todos[id].checked = !todos[id].checked;
  }

  // Delete task
  if (e.target.classList.contains("delete")) {
    todos.splice(id, 1);
  }

  renderTodos();
});

// ----------------------
// Initial render
// ----------------------
renderTodos();