import {
  openTaskModal,
  closeModal,
  prioritySelection,
  resetPriorityChoices,
} from "./task-modal.js";
import { createNewTask, taskBorderPriority } from "./new-task.js";

const addTask = document.getElementById("right-sub-div");
const addProject = document.getElementById("add-project");
const allTasksDisplay = document.getElementById("all-tasks");
const todayDisplay = document.getElementById("today");
const weekDisplay = document.getElementById("week");
const exitModalBtn = document.getElementById("exit-btn");
const priorities = document.getElementById("priorities");
const formAddOrCancel = document.getElementById("task-form-btns");

addTask.addEventListener("click", () => {
  openTaskModal();
});

addProject.addEventListener("click", () => {
  console.log("Add new project");
});

todayDisplay.addEventListener("click", () => {
  console.log("Todays tasks");
});

weekDisplay.addEventListener("click", () => {
  console.log("This weeks tasks");
});

allTasksDisplay.addEventListener("click", () => {
  console.log("All tasks");
});

exitModalBtn.addEventListener("click", () => {
  closeModal();
  resetPriorityChoices();
});

// use bubbling/event
priorities.addEventListener("click", (e) => {
  if (e.target.classList.contains("priority")) {
    prioritySelection(e.target);
    // console.log(prioritySelection());
  }
});

// use bubbling/event
formAddOrCancel.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    closeModal();
    resetPriorityChoices();
    taskBorderPriority();
    createNewTask();
  }
  if (e.target.classList.contains("cancel")) {
    closeModal();
    resetPriorityChoices();
  }
});
