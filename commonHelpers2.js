import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},m={form:document.querySelector(".feedback-form"),email:document.querySelector('input[name="email"]'),message:document.querySelector('textarea[name="message"]')};m.form.addEventListener("input",a=>{const{name:t,value:s}=a.target;(t==="email"||t==="message")&&(e[t]=s.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e)))});window.addEventListener("load",()=>{const a=localStorage.getItem("feedback-form-state");if(a){const t=JSON.parse(a);e.email=t.email||"",e.message=t.message||"",m.email.value=e.email,m.message.value=e.message}});m.form.addEventListener("submit",a=>{a.preventDefault(),!e.email||!e.message?alert("Fill please all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",m.form.reset())});
//# sourceMappingURL=commonHelpers2.js.map
