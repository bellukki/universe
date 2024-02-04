const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingName = document.querySelector("#greeting__name");
const delHistory = document.querySelector(".delete__history");
const changeName = document.querySelector("#greeting #change");

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greetingName.innerText = `Hello ${username} !`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function changeClick() {
  loginInput.value = "";
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}

function logout() {
  if (confirm("All information will be deleted when you delete history.")) {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(TODOS_KEY);
    window.location.reload();
  }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}

changeName.addEventListener("click", changeClick);
delHistory.addEventListener("click", logout);
