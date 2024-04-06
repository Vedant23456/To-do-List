document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;

      const deleteButton = createDeleteButton(); 

      const taskContainer = document.createElement("div");
      taskContainer.classList.add("task-container");
      taskContainer.appendChild(li); 
      taskContainer.appendChild(deleteButton); 
      taskList.appendChild(taskContainer); 
      taskInput.value = "";
    }
  });

  function createDeleteButton() {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Task";
    deleteButton.classList.add("delete-btn");
    return deleteButton;
  }

  taskList.addEventListener("click", function(event) {
    const target = event.target;
    if (target.tagName === "LI") {
      target.classList.toggle("completed");
    } else if (target.classList.contains("delete-btn")) {
      target.parentNode.parentNode.remove();
    }
  });
});
