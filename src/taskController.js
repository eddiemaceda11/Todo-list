// variables
const body = document.getElementById("body");

// set function for line through task when box checked
const formCheckbox = () => {
  const taskCheckbox = document.getElementById("task-checkbox");
  const taskTitle = document.getElementById("task-title");

  if (taskCheckbox.checked === true) {
    taskTitle.style.textDecoration = "line-through";
  } else if (taskCheckbox.checked === false) {
    taskTitle.style.textDecoration = "none";
  }
};

// set function to view task details
const openDetails = (e) => {
  // append to body
  const detailsPopup = document.createElement("section");
  detailsPopup.classList.add("details-popup");

  // append to detpopup
  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("details-container");

  // append to details container
  const closeDetailsModal = document.createElement("p");
  closeDetailsModal.classList.add("close-details-modal");
  closeDetailsModal.setAttribute("id", "close-details-modal");
  closeDetailsModal.textContent = "x";

  // append to details container
  const detailsHeading = document.createElement("p");
  detailsHeading.classList.add("details-heading");
  detailsHeading.textContent = "Details";

  // append to details container
  const detailsInfoCont = document.createElement("div");
  detailsInfoCont.classList.add("details-info-cont");

  // append to details info container
  const details1 = document.createElement("div");
  details1.classList.add("details-1");

  // append to details1
  const detailsTask = document.createElement("p");
  detailsTask.classList.add("details-task");
  detailsTask.textContent = "To-do:";

  // append to details1
  const taskTitle = document.getElementById("task-title");
  const detailsTaskTitle = document.createElement("p");
  detailsTaskTitle.textContent = taskTitle.textContent;

  // append to details info container
  const details2 = document.createElement("div");
  details2.classList.add("details-2");

  // append to details2
  const detailsPriority = document.createElement("p");
  detailsPriority.classList.add("details-priority");
  detailsPriority.textContent = "Priority:";

  // Display the level of priority
  const detailsPriorityLvl = document.createElement("p");
  detailsPriorityLvl.classList.add("details-priority-lvl");
  const addedTaskDiv = document.querySelector(".added-task-div");

  if (addedTaskDiv.classList.contains("add-task-priority-low")) {
    detailsPriorityLvl.textContent = "Low";
  }
  if (addedTaskDiv.classList.contains("add-task-priority-med")) {
    detailsPriorityLvl.textContent = "Medium";
  }
  if (addedTaskDiv.classList.contains("add-task-priority-high")) {
    detailsPriorityLvl.textContent = "High";
  }

  // Create the third details line, append to details info cont
  const details3 = document.createElement("div");
  details3.classList.add("details-3");

  // Create a p with "Due by:", append to details3
  const detailsDue = document.createElement("p");
  detailsDue.classList.add("details-due");
  detailsDue.textContent = "Due by:";

  //  Create a p that displays due date, and append to details3
  const detailsDate = document.createElement("p");
  detailsDate.classList.add("details-date");
  detailsDate.textContent = "December 29th, 2022";

  // Create the 4th and final details line, append to details info cont
  const details4 = document.createElement("div");
  details4.classList.add("details-4");

  // create a p with "Notes:", append to details4
  const detailsNotes = document.createElement("p");
  detailsNotes.classList.add("details-notes");
  detailsNotes.textContent = "Notes:";

  //  Create a p that displays notes info, and append to details4
  const detailsNotesInput = document.createElement("p");
  detailsNotesInput.classList.add("details-notes-input");

  const noteText = document.getElementById("notes");
  console.log(noteText);
  detailsNotesInput.textContent = noteText.textContent;

  //
  body.appendChild(detailsPopup);
  detailsPopup.appendChild(detailsContainer);
  detailsContainer.appendChild(closeDetailsModal);
  detailsContainer.appendChild(detailsHeading);
  detailsContainer.appendChild(detailsInfoCont);
  detailsInfoCont.appendChild(details1);
  details1.appendChild(detailsTask);
  details1.appendChild(detailsTaskTitle);
  detailsInfoCont.appendChild(details2);
  details2.appendChild(detailsPriority);
  details2.appendChild(detailsPriorityLvl);
  detailsInfoCont.appendChild(details3);
  details3.appendChild(detailsDue);
  details3.appendChild(detailsDate);
  detailsInfoCont.appendChild(details4);
  details4.appendChild(detailsNotes);
  details4.appendChild(detailsNotesInput);

  const container = document
    .getElementById("container")
    .classList.add("darken-background");
};

// create edit btn modal
const editBtnModal = () => {
  // create section element for the edit modal that will allow for the editing of task notes, and append to body
  const editPopup = document.createElement("section");
  editPopup.classList.add("edit-popup");
  editPopup.setAttribute("id", "edit-popup");

  // create the container for the edit popup modal, append to editPopup
  const editPopupContainer = document.createElement("div");
  editPopupContainer.classList.add("edit-popup-container");

  // create header for edit task, and append to editPopupContainer
  const editHeader = document.createElement("p");
  editHeader.classList.add("edit-header");
  editHeader.textContent = "Edit Notes";

  // create header for editing task notes, and append to editPopupContainer
  const editTaskText = document.createElement("textarea");
  editTaskText.classList.add("edit-task-text");
  editTaskText.setAttribute("id", "edit-task-text");

  // create button for save updated task notes, and append to editPopupContainer
  const saveEditBtn = document.createElement("button");
  saveEditBtn.classList.add("save-edit-btn");
  saveEditBtn.setAttribute("id", "save-edit-btn");
  saveEditBtn.textContent = "Save";

  body.appendChild(editPopup);
  editPopup.appendChild(editPopupContainer);
  editPopupContainer.appendChild(editHeader);
  editPopupContainer.appendChild(editTaskText);
  editPopupContainer.appendChild(saveEditBtn);
};

// set function to open edit task
const displayEditTask = () => {
  const taskNotes = document.getElementById("notes");
  const editTaskText = document.getElementById("edit-task-text");

  console.log(taskNotes.textContent);
  editTaskText.textContent = taskNotes.textContent;
  console.log(editTaskText.textContent);
};

// set function to save new task notes
const saveUpdatedNotes = () => {
  const editTaskText = document.getElementById("edit-task-text");
  const taskNotes = document.getElementById("notes");

  console.log(editTaskText.value);
  taskNotes.textContent = editTaskText.value;

  console.log(taskNotes.textContent);
};

// set function to delete task
const deleteTask = () => {
  const addedTaskDiv = document.getElementById("added-task-div");
  addedTaskDiv.remove();
};

// set function to darken background on editnmodal open

// set function to lighten background on edit modal close (see if i can combine this and the above into 1 function)
const closeEditModal = () => {
  const closeEditModalBtn = document.getElementById("edit-popup");
  // const taskEditIcon = document.getElementById("edit-btn");

  closeEditModalBtn.remove();
  // taskEditIcon.classList.add("note-exists");
};

export {
  formCheckbox,
  openDetails,
  editBtnModal,
  displayEditTask,
  saveUpdatedNotes,
  closeEditModal,
  deleteTask,
};
