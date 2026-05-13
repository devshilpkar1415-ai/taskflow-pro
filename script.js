function loginUser() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please enter email and password");
    return;
  }

  alert("Welcome to TaskFlow Pro!");
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "dashboard.html";
}