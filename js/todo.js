const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

const coin = document.querySelector("#coin");

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteList(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
function deleteTodo(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  const deleteSpan = document.createElement("span");
  deleteSpan.className = "material-symbols-outlined";
  deleteSpan.innerText = "rocket_launch";
  button.appendChild(deleteSpan);
  button.addEventListener("click", deleteList);
  deleteSpan.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  deleteSpan.id = "deleteTodo";
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObject = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObject);
  paintToDo(newToDoObject);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function coinFlip(event) {
  event.preventDefault();
  const result = Math.floor(Math.random() * 2);
  let cResult = "";
  if (result == 1) {
    cResult = "HEAD ➕";
  } else {
    cResult = "TAIL ➖";
  }
  const newCoinObj = {
    text: `${cResult}`,
    id: Date.now(),
  };
  toDos.push(newCoinObj);
  paintToDo(newCoinObj);
  saveToDos();
}

coin.addEventListener("click", coinFlip);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

if (savedUsername != null) {
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
}
