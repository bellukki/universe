const calyear = document.querySelector(".calendar__year span:first-child");
const calmonth = document.querySelector(".calendar__year span:last-child");
const calday = document.querySelector(".calendar__day span");
const caldayofweek = document.querySelector(".calendar__rest span");

const calendarPaint = document.querySelector("#calendarIcon");

function getCalendar() {
  const today = new Date();
  const year = today.getFullYear();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[today.getMonth()];
  const day = today.getDate();
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayofweek = dayNames[today.getDay()];

  calyear.innerText = `${year}`;
  calmonth.innerText = `${month}`;
  calday.innerText = `${String(day).padStart(2, "0")}`;
  caldayofweek.innerText = `${dayofweek}`;
}

getCalendar();
setInterval(getCalendar, 1000);

function calendarOn() {
  calyear.classList.toggle(HIDDEN_CLASSNAME);
  calmonth.classList.toggle(HIDDEN_CLASSNAME);
  calday.classList.toggle(HIDDEN_CLASSNAME);
  caldayofweek.classList.toggle(HIDDEN_CLASSNAME);
}

calendarPaint.addEventListener("click", calendarOn);

calendarOn();
