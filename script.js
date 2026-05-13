if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "index.html";
}

function addTask() {

  let title = document.getElementById("taskTitle").value;
  let desc = document.getElementById("taskDesc").value;
  let status = document.getElementById("taskStatus").value;

  if (title.trim() === "") {
    alert("Please enter task title");
    return;
  }

  let task = document.createElement("div");

  task.className = "task";

  task.innerHTML = `
    <b>${title}</b>
    <p>${desc}</p>

    <button onclick="moveTask(this)">Move</button>

    <button class="delete-btn" onclick="deleteTask(this)">
      Delete
    </button>
  `;

  document.getElementById(status).appendChild(task);

  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDesc").value = "";
}

function moveTask(button) {

  let task = button.parentElement;

  if (task.parentElement.id === "pending") {

    document.getElementById("progress").appendChild(task);

  } else if (task.parentElement.id === "progress") {

    document.getElementById("completed").appendChild(task);

  } else {

    document.getElementById("pending").appendChild(task);
  }
}

function deleteTask(button) {

  button.parentElement.remove();
}

function logoutUser() {

  localStorage.removeItem("isLoggedIn");

  window.location.href = "index.html";
}