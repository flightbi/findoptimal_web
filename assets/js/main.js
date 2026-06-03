const t=document.querySelector('.nav-toggle');const m=document.querySelector('.nav-menu');if(t&&m){t.addEventListener('click',()=>{const o=m.classList.toggle('is-open');t.setAttribute('aria-expanded',String(o));});}
const languageButtons=document.querySelectorAll('[data-language]');
const languagePanels=document.querySelectorAll('[data-language-panel]');
languageButtons.forEach((button)=>{button.addEventListener('click',()=>{const language=button.getAttribute('data-language');languageButtons.forEach((item)=>item.classList.toggle('is-active',item===button));languagePanels.forEach((panel)=>panel.classList.toggle('is-hidden',panel.getAttribute('data-language-panel')!==language));});});
const loginForm=document.querySelector('[data-login-form]');
const loginError=document.querySelector('[data-login-error]');
if(loginForm&&loginError){loginForm.addEventListener('submit',(event)=>{event.preventDefault();loginError.textContent='Incorrect username or password.';});}
