const registerForm = document.querySelector('.login-form')
registerForm.addEventListener('submit', hendleSubmit);
function hendleSubmit(event) {
 event.preventDefault();
 const form = event.currentTarget;
 const formData = {};
 const email = form.elements.email.value;
 const password = form.elements.password.value;
 if (email === '' || password === '') {
    console.log("Alert! Please fill in all the fields!");
    return;
 }
   formData.email = email; 
   formData.password = password;
   console.log(formData);
   form.reset();
}



