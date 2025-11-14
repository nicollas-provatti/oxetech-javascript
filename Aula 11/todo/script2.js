const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const clearCompletedBtn = document.querySelector("#clear-completed");
const filters = document.querySelectorAll(".filters button");

let filter = "all";

const tasks = [];

function createTaskElement(task) {
  const li = document.createElement("li");
  li.id = task.id;

  if (task.completed) {
    li.classList.add("completed");
  }

  li.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""}>
      <span>${task.text}</span>
      <div class="actions-group">
        <button class="edit">✏️</button>
        <button class="remove">🗑️</button>
      </div>
    `;

  const input = li.querySelector("input");
  const edit = li.querySelector(".edit");
  const remove = li.querySelector(".remove");

  input.addEventListener("change", () => {
    task.completed = input.checked;
    li.classList.toggle("completed");
    renderTasks();
  });

  edit.addEventListener("click", () => {
    const span = li.querySelector("span");
    span.contentEditable = true;
    span.focus();

    span.addEventListener(
      "blur",
      () => {
        span.contentEditable = false;
        task.text = span.textContent.trim();
      },
      { once: true }
    );
  });

  remove.addEventListener("click", () => {
    if (confirm("Deseja realmente excluir esta tarefa?")) {
      const index = tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) tasks.splice(index, 1);
      renderTasks();
    }
  });

  return li;
}

function renderTasks() {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    const emptyMsg = document.createElement("li");
    emptyMsg.classList.add("empty-message");

    if (tasks.length === 0) {
      emptyMsg.textContent = "Nenhuma tarefa adicionada.";
    } else if (filter === "pending") {
      emptyMsg.textContent = "Nenhuma tarefa pendente.";
    } else if (filter === "completed") {
      emptyMsg.textContent = "Nenhuma tarefa completada.";
    } else {
      emptyMsg.textContent = "Nenhuma tarefa encontrada.";
    }

    taskList.appendChild(emptyMsg);
    updateCount();
    return;
  }

  filteredTasks.forEach((task) =>
    taskList.appendChild(createTaskElement(task))
  );

  updateCount();
}

function updateCount() {
  const pending = tasks.filter((t) => !t.completed).length;
  taskCount.textContent = `${pending} tarefas pendentes`;
}

addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({ id: Date.now(), text, completed: false });
  taskInput.value = "";
  taskInput.focus();
  renderTasks();
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTaskBtn.click();
});

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    renderTasks(btn.dataset.filter);
  });
});

clearCompletedBtn.addEventListener("click", () => {
  const filtered = tasks.filter((t) => !t.completed);
  tasks.splice(0, tasks.length, ...filtered);
  renderTasks();
});

document.addEventListener("DOMContentLoaded", renderTasks);
