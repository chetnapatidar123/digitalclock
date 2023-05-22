function clock() {
let hours = document.querySelector(".hours");
let minuts = document.querySelector(".minuts");
let second = document.querySelector(".second");
let periods = document.querySelector(".ampm")

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

let ampm = h >= 12 ? "PM": "AM";

if(h > 12){
    h = h - 12;
}


h = (h < 10 ) ? "0" + h : h;
m = (m < 10 ) ? "0" + m: m;
s = (s < 10 ) ? "0" + s : s;



hours.innerHTML = h;
minuts.innerHTML = m;
second.innerHTML = s;
periods.innerHTML = ampm;
};
setInterval(clock,1000);