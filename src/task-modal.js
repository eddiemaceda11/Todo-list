const openTaskModal = () => {
  const container = document
    .getElementById("container")
    .classList.add("darken-background");
  const taskModal = document
    .getElementById("task-popup")
    .classList.remove("hidden");
  return container, taskModal;
};

const closeModal = () => {
  const container = document
    .getElementById("container")
    .classList.remove("darken-background");
  const taskModal = document
    .getElementById("task-popup")
    .classList.add("hidden");
  const popupForm = document.getElementById("task-popup-form").reset();
  return taskModal, container, popupForm;
};

const prioritySelection = (e) => {
  const priorityLow = document.getElementById("priority-low");
  const priorityMedium = document.getElementById("priority-medium");
  const priorityHigh = document.getElementById("priority-high");

  if (e.classList.contains("low")) {
    console.log(e.classList);
    priorityLow.style.backgroundColor = "green";
    priorityLow.style.color = "white";
    priorityMedium.style.backgroundColor = "#fff";
    // priorityMedium.style.color = "#dbb249";
    priorityMedium.style.color = "orange";
    priorityHigh.style.backgroundColor = "#fff";
    priorityHigh.style.color = "red";
  }
  if (e.classList.contains("medium")) {
    console.log(e.classList);
    // priorityMedium.style.backgroundColor = "#dbb249";
    priorityMedium.style.backgroundColor = "orange";
    priorityMedium.style.color = "white";
    priorityLow.style.backgroundColor = "#fff";
    priorityLow.style.color = "green";
    priorityHigh.style.backgroundColor = "#fff";
    priorityHigh.style.color = "red";
  }
  if (e.classList.contains("high")) {
    console.log(e.classList);
    priorityHigh.style.backgroundColor = "red";
    priorityHigh.style.color = "white";
    priorityMedium.style.backgroundColor = "#fff";
    // priorityMedium.style.color = "#dbb249";
    priorityMedium.style.color = "orange";
    priorityLow.style.backgroundColor = "#fff";
    priorityLow.style.color = "green";
  }
};

const resetPriorityChoices = () => {
  const priorityLow = document.getElementById("priority-low");
  const priorityMedium = document.getElementById("priority-medium");
  const priorityHigh = document.getElementById("priority-high");

  priorityLow.style.backgroundColor = "#fff";
  priorityLow.style.color = "green";
  priorityMedium.style.backgroundColor = "#fff";
  // priorityMedium.style.color = "#dbb249";
  priorityMedium.style.color = "orange";
  priorityHigh.style.backgroundColor = "#fff";
  priorityHigh.style.color = "red";
};

export { openTaskModal, closeModal, prioritySelection, resetPriorityChoices };
