const ddayBox = document.querySelector(".dday__box");
const ddayTitle = document.querySelector(".dday__main span:first-child");
const ddayLeft = document.querySelector(".dday__main span:nth-child(2)");
const ddayReset = document.querySelector(".dday__main span:last-child");
const ddayForm = document.querySelector("#dday-form");
const ddayCalInput = document.querySelector("#dday_cal");
const ddayText = document.querySelector("#dday_text");
const ddayToggle = document.querySelector("#ddayIcon");

const today = new Date();
const caltoday = today.toISOString().substring(0, 10);
ddayCalInput.setAttribute("min", caltoday);

const DDAYDAY_KEY = "dDayDate";
const DDAYNAME_KEY = "dDayName";

function DaySubmit(event) {
  event.preventDefault();
  ddayForm.classList.add(HIDDEN_CLASSNAME);
  ddayTitle.classList.remove(HIDDEN_CLASSNAME);
  ddayLeft.classList.remove(HIDDEN_CLASSNAME);
  ddayReset.classList.remove(HIDDEN_CLASSNAME);
  const dDayName = ddayText.value;
  const dDayDate = ddayCalInput.value;
  localStorage.setItem(DDAYDAY_KEY, dDayDate);
  localStorage.setItem(DDAYNAME_KEY, dDayName);
  paintDday(dDayDate);
  paintDName(dDayName);
}

function paintDday() {
  const dDayDate = new Date(localStorage.getItem(DDAYDAY_KEY));
  ddayTitle.classList.remove(HIDDEN_CLASSNAME);
  ddayLeft.classList.remove(HIDDEN_CLASSNAME);
  ddayReset.classList.remove(HIDDEN_CLASSNAME);
  function getDday() {
    const dDayRaw = dDayDate - today;
    const days = Math.floor(dDayRaw / (1000 * 60 * 60 * 24));
    ddayLeft.innerText = `D-${days + 1}`;
  }
  getDday();
}

function paintDName() {
  const dDayName = localStorage.getItem(DDAYNAME_KEY);
  ddayTitle.innerText = `${dDayName}`;
}
function changeDday() {
  ddayCalInput.value = "";
  ddayText.value = "";
  localStorage.removeItem(DDAYDAY_KEY);
  localStorage.removeItem(DDAYNAME_KEY);
  ddayForm.classList.remove(HIDDEN_CLASSNAME);
  ddayText.classList.remove(HIDDEN_CLASSNAME);
  ddayTitle.classList.add(HIDDEN_CLASSNAME);
  ddayLeft.classList.add(HIDDEN_CLASSNAME);
  ddayReset.classList.add(HIDDEN_CLASSNAME);
  ddayForm.addEventListener("submit", DaySubmit);
}

ddayReset.addEventListener("click", changeDday);

function dDayOn() {
  ddayBox.classList.toggle(HIDDEN_CLASSNAME);
}

ddayToggle.addEventListener("click", dDayOn);

const savedDdayDate = localStorage.getItem(DDAYDAY_KEY);
const savedDdayName = localStorage.getItem(DDAYNAME_KEY);

if (savedDdayDate === null && savedDdayName === null) {
  ddayForm.classList.remove(HIDDEN_CLASSNAME);
  ddayForm.addEventListener("submit", DaySubmit);
} else {
  paintDday();
  paintDName();
}
