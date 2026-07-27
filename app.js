document.addEventListener("DOMContentLoaded",()=>{

const loader=document.createElement("div");

loader.id="app-loader";

loader.style.cssText=`
position:fixed;
inset:0;
background:#020617;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
z-index:999999;
transition:.5s;
`;

loader.innerHTML=`
<div style="width:90px;height:90px;border-radius:50%;border:5px solid rgba(255,255,255,.15);border-top:5px solid #38bdf8;animation:spin 1s linear infinite"></div>
<h2 style="margin-top:25px;color:#fff;font-family:Segoe UI;">Python Learning</h2>
<p style="color:#94a3b8;">Loading Application...</p>
`;

document.body.appendChild(loader);

const style=document.createElement("style");

style.innerHTML=`
@keyframes spin{
0%{transform:rotate(0deg);}
100%{transform:rotate(360deg);}
}
.toast{
position:fixed;
left:50%;
bottom:20px;
transform:translateX(-50%);
background:#0f172a;
color:#fff;
padding:14px 20px;
border-radius:12px;
border:1px solid #334155;
box-shadow:0 10px 30px rgba(0,0,0,.4);
z-index:999999;
font-family:Segoe UI;
animation:fade .35s;
}
@keyframes fade{
from{opacity:0;transform:translate(-50%,20px);}
to{opacity:1;transform:translate(-50%,0);}
}
`;

document.head.appendChild(style);

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>loader.remove(),500);

},1200);

});

function toast(message){

const t=document.createElement("div");

t.className="toast";

t.innerHTML=message;

document.body.appendChild(t);

setTimeout(()=>{

t.remove();

},3000);

}

window.addEventListener("online",()=>{

toast("✅ Internet Connected");

});

window.addEventListener("offline",()=>{

toast("⚠️ You are Offline");

});

if(!localStorage.getItem("python_learning_first_open")){

localStorage.setItem("python_learning_first_open","true");

setTimeout(()=>{

toast("👋 Welcome to Python Learning");

},1800);

}

console.log("Python Learning");

console.log("Version : 1.0.0");

console.log("Developed by Lalan Kumar");

document.addEventListener("keydown",e=>{

if(e.key==="F12")e.preventDefault();

if(e.ctrlKey&&e.shiftKey&&["I","J","C"].includes(e.key.toUpperCase()))e.preventDefault();

if(e.ctrlKey&&e.key.toUpperCase()==="U")e.preventDefault();

});

document.addEventListener("contextmenu",e=>{

e.preventDefault();

});

});
