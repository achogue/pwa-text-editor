(()=>{const e=document.getElementById("buttonInstall");window.addEventListener("beforeinstallprompt",(t=>{t.preventDefault(),deferredPrompt=t,e.style.display="block"})),e.addEventListener("click",(async()=>{deferredPrompt.prompt(),await deferredPrompt.userChoice,deferredPrompt=null,e.style.display="none"})),window.addEventListener("appinstalled",(e=>{console.log("Jate PWA installed successfully.")}))})();