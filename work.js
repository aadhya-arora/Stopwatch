const butt = document.querySelectorAll(".buttons");
butt.forEach((butt) =>
  butt.addEventListener("mouseover", () => {
    butt.style.cursor = "pointer";
  })
);

let [seconds, minutes, hours] = [0, 0, 0];
let count = document.querySelector("#count");
let timer = null;
let h, m, s;
function watch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  h = hours < 10 ? "0" + hours : hours;
  m = minutes < 10 ? "0" + minutes : minutes;
  s = seconds < 10 ? "0" + seconds : seconds;

  count.innerHTML = h + ":" + m + ":" + s;
}
function start() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(watch, 1000);
}

function stop() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  count.innerHTML = "00:00:00";
}

const star = document.querySelector("#start");
star.addEventListener("click", () => {
  start();
});

const rst = document.querySelector("#reset");
const lapse = document.querySelector("#lapse");
rst.addEventListener("click", () => {
  reset();
  lapse.innerHTML = "";
  disp.style.border = "";
});

const stp = document.querySelector("#stop");
const disp = document.querySelector("#disp");
stp.addEventListener("click", () => {
  stop();
  disp.style.border = "4px dashed #3C7A89";
  lapse.innerHTML = h + ":" + m + ":" + s;
});
