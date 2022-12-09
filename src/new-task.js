const createNewTask = () => {
  const taskTitle = document.getElementById("task-name");

  const allTasks = document.getElementById("all-tasks-main-display");

  // append to ul / #all-tasks-main-display
  const addedTaskDiv = document.createElement("div");
  addedTaskDiv.classList.add("added-task-div");
  addedTaskDiv.style.setProperty("--border-priority", taskBorderPriority());
  ////////////////////////////////////////////

  /////////////////// left
  // append to addedtaskdiv
  const addedTaskLeft = document.createElement("div");
  addedTaskLeft.classList.add("added-task-left");

  // append to addedtaskleft
  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.setAttribute("id", "task-checkbox");

  // append to addedtaskleft
  // rename this to something better
  const rightSectAddedTasks = document.createElement("li");
  rightSectAddedTasks.classList.add("right-sect-add-tasks");
  rightSectAddedTasks.textContent = taskTitle.value;
  //rightSectAddedTasks.textcontent = userinput

  //////////////////////// right
  // append to addedtaskdiv
  const addedTaskRight = document.createElement("div");
  addedTaskRight.classList.add("added-task-right");

  // task details
  const taskDetails = document.createElement("p");
  taskDetails.classList.add("task-details");
  taskDetails.textContent = "DETAILS";

  // date placeholder
  const taskDueDate = document.createElement("p");
  taskDueDate.classList.add("task-date");
  taskDueDate.textContent = "Dec 24th";

  // append to addedtaskright
  const taskEditIcon = document.createElement("i");
  taskEditIcon.classList.add("fa-regular");
  taskEditIcon.classList.add("fa-pen-to-square");

  // append to addedtaskright
  const taskTrashIcon = document.createElement("i");
  taskTrashIcon.classList.add("fa-sharp");
  taskTrashIcon.classList.add("fa-solid");
  taskTrashIcon.classList.add("fa-trash");

  allTasks.appendChild(addedTaskDiv);
  addedTaskDiv.appendChild(addedTaskLeft);
  addedTaskLeft.appendChild(taskCheckbox);
  addedTaskLeft.appendChild(rightSectAddedTasks);
  addedTaskDiv.appendChild(addedTaskRight);
  addedTaskRight.appendChild(taskDetails);
  addedTaskRight.appendChild(taskDueDate);
  addedTaskRight.appendChild(taskEditIcon);
  addedTaskRight.appendChild(taskTrashIcon);

  return createNewTask;
};

const taskBorderPriority = () => {
  const priorityLow = document.getElementById("priority-low");
  const priorityMedium = document.getElementById("priority-medium");
  const priorityHigh = document.getElementById("priority-high");

  if (priorityLow.style.backgroundColor === "green") {
    console.log("green");
    return "solid 4px green";
  }
  if (priorityMedium.style.backgroundColor === "orange") {
    console.log("orange");
    return "solid 4px orange";
  }
  if (priorityHigh.style.backgroundColor === "red") {
    console.log("red");
    return "solid 4px red";
  }
};

export { createNewTask, taskBorderPriority };
