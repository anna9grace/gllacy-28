var modalOpen=document.querySelector(".modal-open-btn"),modalFeedback=document.querySelector(".feedback.modal"),modalWrapper=document.querySelector(".modal-wrapper"),modalClose=modalFeedback.querySelector(".close-modal"),feedbackForm=modalFeedback.querySelector(".feedback-form"),nameField=modalFeedback.querySelector("[id=questions-name]"),emailField=modalFeedback.querySelector("[id=questions-email]"),questionField=modalFeedback.querySelector("[id=questions-text]"),slideButtons=document.querySelectorAll(".slider-controls-btn"),slides=document.querySelectorAll(".slide"),pageColor=document.querySelector(".page-wrapper"),isStorageSupport=!0,storageName="",storageEmail="";try{storageName=localStorage.getItem("name"),storageEmail=localStorage.getItem("email")}catch(a){isStorageSupport=!1}modalOpen.addEventListener("click",function(a){a.preventDefault(),modalFeedback.classList.add("modal-show"),modalWrapper.classList.add("background-show"),nameField.focus(),storageName&&(nameField.value=storageName,emailField.focus()),storageEmail&&(emailField.value=storageEmail,questionField.focus())}),modalClose.addEventListener("click",function(a){a.preventDefault(),modalFeedback.classList.remove("modal-show"),modalWrapper.classList.remove("background-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&modalFeedback.classList.contains("modal-show")&&(a.preventDefault(),modalFeedback.classList.remove("modal-show"),modalWrapper.classList.remove("background-show"))}),feedbackForm.addEventListener("submit",function(a){nameField.value&&emailField.value&&questionField.value?(localStorage.setItem("name",nameField.value),localStorage.setItem("email",emailField.value)):(a.preventDefault(),modalFeedback.classList.remove("form-error"),modalFeedback.offsetWidth=modalFeedback.offsetWidth,modalFeedback.classList.add("form-error"))}),slideButtons[0].classList.add("current-btn");for(let a=0;a<slideButtons.length;a++)slideButtons[a].onclick=function(b){b.preventDefault();var c=document.querySelector(".current-btn");c.classList.remove("current-btn"),slideButtons[a].classList.add("current-btn");var d=document.querySelector(".slide-shown");for(d.classList.remove("slide-shown"),slides[a].classList.add("slide-shown"),n=1;n<slideButtons.length;n++)pageColor.classList.contains("icecream-bg-"+n)&&pageColor.classList.remove("icecream-bg-"+n);pageColor.classList.add("icecream-bg-"+a)};