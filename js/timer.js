const clock = document.querySelector("div#timer span:first-child");
const clockCs = document.querySelector("div#timer span:nth-child(2)");
const clockBtn = document.querySelector("#calmdown");
const clockBtn2 = document.querySelector("#play");

function getClock() {
  const today = new Date();
  const thisyear = today.getFullYear();
  let cmDay = new Date(`January 1, ${thisyear}`);
  if (cmDay < today) {
    cmDay = new Date(`January 1, ${thisyear + 1}`);
  }
  const cmDays = (cmDay - today) / (1000 * 60 * 60 * 24);
  const cmHours = (cmDays - Math.floor(cmDays)) * 24;
  const cmMinutes = (cmHours - Math.floor(cmHours)) * 60;
  const cmSeconds = (cmMinutes - Math.floor(cmMinutes)) * 60;
  const cmcSeconds = (cmSeconds - Math.floor(cmSeconds)) * 100;
  const days = String(Math.floor(cmDays)).padStart(2, "0");
  const hours = String(Math.floor(cmHours)).padStart(2, "0");
  const minutes = String(Math.floor(cmMinutes)).padStart(2, "0");
  const seconds = String(Math.floor(cmSeconds)).padStart(2, "0");
  const cseconds = String(Math.floor(cmcSeconds)).padStart(2, "0");
  clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  clockCs.innerText = `${cseconds}`;
}

getClock();
setInterval(getClock, 10);

function calmDown() {
  clockCs.classList.add("hide");
}

function play() {
  clockCs.classList.remove("hide");
}

clockBtn.addEventListener("click", calmDown);
clockBtn2.addEventListener("click", play);
