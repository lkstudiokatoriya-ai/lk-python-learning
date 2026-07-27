let deferredPrompt=null;

const installButton=document.createElement("button");

installButton.id="install-app";

installButton.innerHTML="📲 Install App";

installButton.style.cssText=`
position:fixed;
right:20px;
bottom:20px;
z-index:99999;
padding:14px 22px;
border:none;
outline:none;
border-radius:50px;
background:linear-gradient(135deg,#2563eb,#38bdf8);
color:#fff;
font-size:16px;
font-weight:600;
cursor:pointer;
display:none;
box-shadow:0 10px 35px rgba(37,99,235,.45);
transition:.35s;
`;

document.body.appendChild(installButton);

installButton.onmouseenter=()=>installButton.style.transform="translateY(-3px) scale(1.03)";
installButton.onmouseleave=()=>installButton.style.transform="translateY(0) scale(1)";

window.addEventListener("beforeinstallprompt",e=>{

e.preventDefault();

deferredPrompt=e;

installButton.style.display="block";

});

installButton.addEventListener("click",async()=>{

if(!deferredPrompt)return;

deferredPrompt.prompt();

const result=await deferredPrompt.userChoice;

if(result.outcome==="accepted"){

console.log("PWA Installed");

}else{

console.log("Installation Cancelled");

}

deferredPrompt=null;

installButton.style.display="none";

});

window.addEventListener("appinstalled",()=>{

console.log("Application Installed Successfully");

installButton.remove();

});
