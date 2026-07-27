if("serviceWorker" in navigator){

navigator.serviceWorker.register("sw.js").then(reg=>{

function checkUpdate(){

reg.update();

}

setInterval(checkUpdate,60000);

reg.addEventListener("updatefound",()=>{

const worker=reg.installing;

worker.addEventListener("statechange",()=>{

if(worker.state==="installed" && navigator.serviceWorker.controller){

const popup=document.createElement("div");

popup.style.cssText=`
position:fixed;
left:50%;
bottom:20px;
transform:translateX(-50%);
width:min(90%,420px);
background:#0f172a;
color:#fff;
padding:18px;
border-radius:16px;
box-shadow:0 15px 40px rgba(0,0,0,.45);
border:1px solid #334155;
z-index:999999;
font-family:Segoe UI,sans-serif;
`;

popup.innerHTML=`
<h3 style="margin:0 0 8px;font-size:20px;">🚀 Update Available</h3>
<p style="margin:0 0 16px;color:#cbd5e1;">A new version of Python Learning is ready.</p>
<button id="updateNow" style="padding:12px 18px;border:none;border-radius:10px;background:#38bdf8;color:#02111f;font-weight:700;cursor:pointer;">Update Now</button>
`;

document.body.appendChild(popup);

document.getElementById("updateNow").onclick=()=>{

worker.postMessage({action:"skipWaiting"});

location.reload();

};

}

});

});

navigator.serviceWorker.addEventListener("controllerchange",()=>{

location.reload();

});

}).catch(err=>console.log(err));

}
