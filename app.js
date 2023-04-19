// app.js
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task-input");
const addTaskButton = document.getElementById("add-task-button");

// Load tasks from local storage on page load
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render the list of tasks
function renderTaskList() {
  taskList.innerHTML = "";
  for (const task of tasks) {
    const li = document.createElement("li");
    const taskText = document.createElement("span");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    taskText.textContent = task.text;
    editButton.textContent = "Edit";
    deleteButton.textContent = "Delete";
    editButton.addEventListener("click", () => editTask(task));
    deleteButton.addEventListener("click", () => deleteTask(task));
    li.appendChild(taskText);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  }
}

// Add a new task
function addTask(text) {
  let task = { id: Date.now(), text };
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTaskList();
}

// Edit an existing task
function editTask(task) {
  const newText = prompt("Enter the new task text:", task.text);
  if (newText) {
    task.text = newText;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTaskList();
  }
}

// Delete an existing task
function deleteTask(task) {
  const index = tasks.findIndex((t) => t.id === task.id);
  if (index !== -1) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTaskList();
  }
}

// Handle form submission
addTaskButton.addEventListener("click", (event) => {
  event.preventDefault();
  const text = newTaskInput.value.trim();
  if (text) {
    addTask(text);
    newTaskInput.value = "";
  }
});

// Render the initial list of tasks
renderTaskList();

// Listen for changes to local storage and update the task list accordingly
window.addEventListener("storage", (event) => {
  if (event.key === "tasks") {
    tasks = JSON.parse(event.newValue);
    renderTaskList();
  }
});
