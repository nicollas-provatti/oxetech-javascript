const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const clearCompletedBtn = document.querySelector("#clear-completed");
const filters = document.querySelectorAll(".filters button");

let filter = "all";


const tasks = [
  {
    id: 1,
    text: "tarefa 1",
    completed: false,
  },
  {
    id: 2,
    text: "tarefa 2",
    completed: true,
  },
  {
    id: 3,
    text: "tarefa 3",
    completed: false,
  },
];

function renderTasks() {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");

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
      li.classList.toggle("completed");
      task.completed = input.checked;
      /**/
    });

    edit.addEventListener("click", () => {
      const span = li.querySelector("span");
      span.contentEditable = true;
      span.focus();

      span.addEventListener("blur", () => {
        span.contentEditable = false;
        task.text = span.textContent.trim();
      });
    });

    remove.addEventListener("click", () => {
      const index = tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        tasks.splice(index, 1);
      }
      renderTasks();
    });

    taskList.appendChild(li);
  });

  updateCount();
}

function updateCount() {
  
}

renderTasks();

