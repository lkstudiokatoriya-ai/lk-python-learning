/* ===========================
   APP.JS
   PART - 1
   =========================== */

"use strict";

/* ---------- WEBSITE ---------- */

const websiteName = "Python Learning";

const authorName = "Lalan Kumar";

console.log(websiteName);

console.log(authorName);

/* ---------- CURRENT YEAR ---------- */

const year = new Date().getFullYear();

console.log(year);

/* ---------- PAGE LOADED ---------- */

window.addEventListener("load",function(){

console.log("Website Loaded Successfully");

});

/* ---------- NAVIGATION ---------- */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link){

link.addEventListener("click",function(){

console.log("Navigation Clicked");

});

});

/* ---------- BUTTON ---------- */

const buttons = document.querySelectorAll("button");

buttons.forEach(function(button){

button.addEventListener("mouseenter",function(){

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",function(){

button.style.transform="scale(1)";

});

});

/* ---------- SCROLL ---------- */

window.addEventListener("scroll",function(){

if(window.scrollY>200){

document.body.classList.add("scrolled");

}else{

document.body.classList.remove("scrolled");

}

});

/* ---------- BACK TO TOP ---------- */

function scrollTopPage(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

/* ---------- SECTION ANIMATION ---------- */

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.classList.add("fade-in");

}

});

});

sections.forEach(function(section){

observer.observe(section);

});

/* ---------- DATE ---------- */

const today=new Date();

console.log(today.toDateString());

/* ---------- GREETING ---------- */

const hour=today.getHours();

if(hour<12){

console.log("Good Morning");

}

else if(hour<18){

console.log("Good Afternoon");

}

else{

console.log("Good Evening");

}

/* ---------- SEARCH ---------- */

const search=document.querySelector("input");

if(search){

search.addEventListener("keyup",function(){

console.log(search.value);

});

}

/* ---------- COPYRIGHT ---------- */

const copyright=document.querySelector(".copyright");

if(copyright){

copyright.innerHTML="© "+year+" Lalan Kumar";

}

/* ---------- WINDOW SIZE ---------- */

window.addEventListener("resize",function(){

console.log(window.innerWidth);

console.log(window.innerHeight);

});

/* ---------- ONLINE ---------- */

window.addEventListener("online",function(){

alert("Internet Connected");

});

window.addEventListener("offline",function(){

alert("Internet Disconnected");

});


/* ===========================
   APP.JS
   PART - 2
   =========================== */

/* ---------- PAGE TITLE ---------- */

document.addEventListener("visibilitychange",function(){

if(document.hidden){

document.title="Come Back 👋";

}else{

document.title="Python Learning | Lalan Kumar";

}

});

/* ---------- SMOOTH SCROLL ---------- */

document.querySelectorAll('a[href^="#"]').forEach(function(link){

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ---------- SCROLL PROGRESS ---------- */

window.addEventListener("scroll",function(){

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/scrollHeight)*100;

console.log("Scroll : "+Math.round(progress)+"%");

});

/* ---------- IMAGE HOVER ---------- */

const images=document.querySelectorAll("img");

images.forEach(function(img){

img.addEventListener("mouseenter",function(){

img.style.opacity=".9";

});

img.addEventListener("mouseleave",function(){

img.style.opacity="1";

});

});

/* ---------- TABLE ROW ---------- */

const rows=document.querySelectorAll("table tr");

rows.forEach(function(row){

row.addEventListener("mouseenter",function(){

row.style.background="#223450";

});

row.addEventListener("mouseleave",function(){

row.style.background="";

});

});

/* ---------- COPY CODE ---------- */

const codeBlocks=document.querySelectorAll("pre");

codeBlocks.forEach(function(code){

code.addEventListener("click",function(){

navigator.clipboard.writeText(code.innerText);

alert("Code Copied");

});

});

/* ---------- RANDOM QUOTE ---------- */

const quotes=[

"Practice makes perfect.",

"Code Every Day.",

"Keep Learning.",

"Never Stop Building.",

"Python is Powerful."

];

console.log(

quotes[Math.floor(Math.random()*quotes.length)]

);

/* ---------- DOUBLE CLICK ---------- */

document.addEventListener("dblclick",function(){

console.log("Double Click Detected");

});

/* ---------- KEYBOARD ---------- */

document.addEventListener("keydown",function(event){

console.log("Key :",event.key);

});

/* ---------- MOUSE POSITION ---------- */

document.addEventListener("mousemove",function(event){

console.log(event.clientX,event.clientY);

});

/* ---------- PAGE INFORMATION ---------- */

console.log(location.href);

console.log(location.hostname);

console.log(location.pathname);

/* ---------- USER AGENT ---------- */

console.log(navigator.userAgent);

/* ---------- LANGUAGE ---------- */

console.log(navigator.language);

/* ---------- COOKIE ---------- */

console.log(document.cookie);

/* ---------- HISTORY ---------- */

console.log(history.length);

/* ---------- SCREEN ---------- */

console.log(screen.width);

console.log(screen.height);
/* ===========================
   APP.JS
   PART - 3
   =========================== */

/* ---------- DARK MODE ---------- */

const darkButton=document.querySelector(".dark-mode");

if(darkButton){

darkButton.addEventListener("click",function(){

document.body.classList.toggle("dark");

});

}

/* ---------- MENU ---------- */

const menuButton=document.querySelector(".menu-btn");

const menu=document.querySelector(".menu");

if(menuButton && menu){

menuButton.addEventListener("click",function(){

menu.classList.toggle("active");

});

}

/* ---------- LOADER ---------- */

window.addEventListener("load",function(){

const loader=document.querySelector(".loader");

if(loader){

loader.style.display="none";

}

});

/* ---------- SCROLL TO TOP BUTTON ---------- */

const topButton=document.querySelector(".top-btn");

window.addEventListener("scroll",function(){

if(topButton){

if(window.scrollY>400){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

}

});

if(topButton){

topButton.addEventListener("click",function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/* ---------- FORM VALIDATION ---------- */

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

const inputs=form.querySelectorAll("input[required],textarea[required]");

let valid=true;

inputs.forEach(function(input){

if(input.value.trim()===""){

valid=false;

input.style.border="2px solid red";

}else{

input.style.border="";

}

});

if(!valid){

e.preventDefault();

alert("Please Fill All Required Fields");

}

});

}

/* ---------- CHARACTER COUNTER ---------- */

const textarea=document.querySelector("textarea");

if(textarea){

textarea.addEventListener("input",function(){

console.log("Characters :",textarea.value.length);

});

}

/* ---------- LOCAL STORAGE ---------- */

localStorage.setItem("website","Python Learning");

console.log(localStorage.getItem("website"));

/* ---------- SESSION STORAGE ---------- */

sessionStorage.setItem("session","Active");

console.log(sessionStorage.getItem("session"));

/* ---------- RANDOM COLOR ---------- */

function randomColor(){

const color="#"+Math.floor(Math.random()*16777215).toString(16);

return color;

}

console.log(randomColor());

/* ---------- RANDOM NUMBER ---------- */

function randomNumber(min,max){

return Math.floor(Math.random()*(max-min+1))+min;

}

console.log(randomNumber(1,100));

/* ---------- CURRENT TIME ---------- */

setInterval(function(){

const now=new Date();

console.log(now.toLocaleTimeString());

},60000);

/* ===========================
   APP.JS
   PART - 4
   =========================== */

/* ---------- CLOCK ---------- */

function updateClock(){

const clock=document.querySelector(".clock");

if(clock){

const now=new Date();

clock.innerHTML=now.toLocaleTimeString();

}

}

setInterval(updateClock,1000);

/* ---------- DATE ---------- */

const dateBox=document.querySelector(".date");

if(dateBox){

dateBox.innerHTML=new Date().toDateString();

}

/* ---------- VISITOR COUNTER ---------- */

let visitors=localStorage.getItem("visitors");

if(visitors===null){

visitors=1;

}else{

visitors=parseInt(visitors)+1;

}

localStorage.setItem("visitors",visitors);

console.log("Visitors :",visitors);

/* ---------- FAQ ---------- */

const details=document.querySelectorAll("details");

details.forEach(function(item){

item.addEventListener("toggle",function(){

console.log("FAQ Updated");

});

});

/* ---------- CARD EFFECT ---------- */

const cards=document.querySelectorAll(".card");

cards.forEach(function(card){

card.addEventListener("mouseenter",function(){

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",function(){

card.style.transform="translateY(0px)";

});

});

/* ---------- BUTTON RIPPLE ---------- */

const btns=document.querySelectorAll(".btn");

btns.forEach(function(btn){

btn.addEventListener("click",function(){

btn.classList.add("pulse");

setTimeout(function(){

btn.classList.remove("pulse");

},500);

});

});

/* ---------- SCROLL PERCENT ---------- */

const progress=document.querySelector(".progress-bar");

window.addEventListener("scroll",function(){

if(progress){

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=(window.pageYOffset/total)*100;

progress.style.width=current+"%";

}

});

/* ---------- EMAIL VALIDATION ---------- */

const email=document.querySelector('input[type="email"]');

if(email){

email.addEventListener("blur",function(){

const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(email.value!==""){

if(pattern.test(email.value)){

email.style.border="2px solid green";

}else{

email.style.border="2px solid red";

}

}

});

}

/* ---------- PASSWORD ---------- */

const password=document.querySelector('input[type="password"]');

if(password){

password.addEventListener("input",function(){

console.log("Password Length :",password.value.length);

});

}

/* ---------- COPY TEXT ---------- */

const copyButtons=document.querySelectorAll(".copy-btn");

copyButtons.forEach(function(button){

button.addEventListener("click",function(){

const target=document.querySelector(button.dataset.target);

if(target){

navigator.clipboard.writeText(target.innerText);

alert("Copied Successfully");

}

});

});

/* ---------- RANDOM FACT ---------- */

const facts=[

"Python was released in 1991.",

"JavaScript runs in browsers.",

"HTML is not a programming language.",

"CSS controls website design.",

"Git helps manage code."

];

console.log(facts[Math.floor(Math.random()*facts.length)]);

/* ===========================
   APP.JS
   PART - 5
   =========================== */

/* ---------- ACCORDION ---------- */

const accordions=document.querySelectorAll(".accordion");

accordions.forEach(function(item){

item.addEventListener("click",function(){

this.classList.toggle("active");

});

});

/* ---------- TAB SYSTEM ---------- */

const tabs=document.querySelectorAll(".tab");

const tabContents=document.querySelectorAll(".tab-content");

tabs.forEach(function(tab,index){

tab.addEventListener("click",function(){

tabs.forEach(function(t){

t.classList.remove("active");

});

tabContents.forEach(function(content){

content.classList.remove("active");

});

tab.classList.add("active");

if(tabContents[index]){

tabContents[index].classList.add("active");

}

});

});

/* ---------- MODAL ---------- */

const modal=document.querySelector(".modal");

const openModal=document.querySelector(".open-modal");

const closeModal=document.querySelector(".close-modal");

if(openModal && modal){

openModal.addEventListener("click",function(){

modal.style.display="flex";

});

}

if(closeModal && modal){

closeModal.addEventListener("click",function(){

modal.style.display="none";

});

}

window.addEventListener("click",function(event){

if(event.target===modal){

modal.style.display="none";

}

});

/* ---------- IMAGE PREVIEW ---------- */

const fileInput=document.querySelector('input[type="file"]');

const preview=document.querySelector(".preview");

if(fileInput && preview){

fileInput.addEventListener("change",function(){

const file=this.files[0];

if(file){

preview.src=URL.createObjectURL(file);

}

});

}

/* ---------- COUNTER ---------- */

const counters=document.querySelectorAll(".counter");

counters.forEach(function(counter){

let start=0;

const end=Number(counter.dataset.target);

const timer=setInterval(function(){

start++;

counter.innerHTML=start;

if(start>=end){

clearInterval(timer);

}

},20);

});

/* ---------- NOTIFICATION ---------- */

function showNotification(message){

alert(message);

}

console.log("Notification Function Ready");

/* ---------- RANDOM ID ---------- */

function generateID(){

return Math.random().toString(36).substring(2,10);

}

console.log(generateID());

/* ---------- CURRENT URL ---------- */

console.log(window.location.href);

/* ---------- RELOAD ---------- */

function reloadPage(){

location.reload();

}

/* ---------- PRINT ---------- */

function printPage(){

window.print();

}

/* ---------- SHARE ---------- */

async function shareWebsite(){

if(navigator.share){

await navigator.share({

title:"Python Learning",

text:"Learn Python Free",

url:location.href

});

}

}

/* ===========================
   APP.JS
   FINAL PART
   =========================== */

/* ---------- TOAST ---------- */

function showToast(message){

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=message;

document.body.appendChild(toast);

setTimeout(function(){

toast.remove();

},3000);

}

/* ---------- NETWORK STATUS ---------- */

function updateNetworkStatus(){

if(navigator.onLine){

console.log("Online");

}else{

console.log("Offline");

}

}

window.addEventListener("online",updateNetworkStatus);

window.addEventListener("offline",updateNetworkStatus);

/* ---------- PAGE LOAD TIME ---------- */

window.addEventListener("load",function(){

const timing=performance.now();

console.log("Page Loaded In :",Math.round(timing),"ms");

});

/* ---------- SCROLL POSITION ---------- */

window.addEventListener("beforeunload",function(){

localStorage.setItem("scrollPosition",window.scrollY);

});

window.addEventListener("load",function(){

const position=localStorage.getItem("scrollPosition");

if(position){

window.scrollTo(0,position);

}

});

/* ---------- VISIT MESSAGE ---------- */

if(!localStorage.getItem("visited")){

showToast("Welcome to Python Learning");

localStorage.setItem("visited","true");

}

/* ---------- DEVELOPER INFO ---------- */

console.log("--------------------------------");

console.log("Website : Python Learning");

console.log("Developer : Lalan Kumar");

console.log("Repository : python-learning");

console.log("Language : HTML CSS JavaScript");

console.log("--------------------------------");

/* ---------- CLEAR CONSOLE ---------- */

function clearConsole(){

console.clear();

}

/* ---------- VERSION ---------- */

const version="1.0.0";

console.log("Version :",version);

/* ---------- APP START ---------- */

function startApp(){

console.log("Application Started Successfully");

}

startApp();

/* ---------- ERROR HANDLER ---------- */

window.addEventListener("error",function(error){

console.error("Error :",error.message);

});

/* ---------- UNHANDLED PROMISE ---------- */

window.addEventListener("unhandledrejection",function(event){

console.error("Promise Error :",event.reason);

});

/* ---------- SHORTCUT KEYS ---------- */

document.addEventListener("keydown",function(event){

if(event.ctrlKey && event.key==="h"){

window.location.href="index.html";

}

if(event.ctrlKey && event.key==="p"){

event.preventDefault();

window.print();

}

});

/* ---------- APP READY ---------- */

document.addEventListener("DOMContentLoaded",function(){

console.log("DOM Ready");

});

/* ---------- END OF FILE ---------- */

/*

Project Name : Python Learning

Developer : Lalan Kumar

GitHub Repository : python-learning

Language : JavaScript (ES6)

Version : 1.0.0

Status : Complete

File : app.js

*/
