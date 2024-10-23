document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    taskForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
          taskList.removeChild(taskItem);
        });
  
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.classList.add("complete-button");
        completeButton.addEventListener("click", function() {
          taskItem.classList.toggle("completed");
        });
  
        taskItem.appendChild(deleteButton);
        taskItem.appendChild(completeButton);
        taskList.appendChild(taskItem);
  
        taskInput.value = "";
      }
    });
  });
  