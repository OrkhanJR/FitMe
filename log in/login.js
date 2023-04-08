function checkEmail() {
  let email = document.getElementById("uname").value;
  if (email !== "m@gmail.com") {
    document.getElementById("error-mail").style.display = "block";
    document.getElementById("uname").style.border = "1px solid red";
  }
}

function checkPassword() {
  let password = document.getElementById("psw").value;
  if (password !== "password") {
    document.getElementById("error-psw").style.display = "block";
    document.getElementById("psw").style.border = "1px solid red";
  }
}

function changeInputType() {
  event.preventDefault();
  const password = document.getElementById("psw");
  const seeBtns = document.querySelectorAll(".see-btn");

  if (password.type === "password") {
    password.type = "text";
    seeBtns[0].style.display = "none";
    seeBtns[1].style.display = "inline-block";
  } else {
    password.type = "password";
    seeBtns[0].style.display = "inline-block";
    seeBtns[1].style.display = "none";
  }
}
