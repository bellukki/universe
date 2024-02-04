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
  const todayNow = new Date();
  const hourNow = todayNow.getHours();
  const username = localStorage.getItem(USERNAME_KEY);
  if (hourNow > 5 && hourNow < 11) {
    greetingName.innerText = `Good Morning, ${username} !`;
  } else if (hourNow >= 11 && hourNow < 17) {
    greetingName.innerText = `Good Afternoon, ${username} !`;
  } else if (hourNow >= 17 && hourNow < 21) {
    greetingName.innerText = `Good Evening, ${username} !`;
  } else if (hourNow >= 21 && hourNow <= 24) {
    greetingName.innerText = `Good Night, ${username} !`;
  } else {
    greetingName.innerText = `Welcome, ${username} !`;
  }
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
    localStorage.removeItem(DDAYDAY_KEY);
    localStorage.removeItem(DDAYNAME_KEY);
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
