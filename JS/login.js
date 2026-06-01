const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e){
  e.preventDefault();

  let email= document.getElementById("email").value.trim();
  let password= document.getElementById("password").value.trim();

  let emailError= document.getElementById("emailError");
  let passwordError= document.getElementById("passwordError");
  let successMsg= document.getElementById("successMsg");
  emailError.textContent= "";
  passwordError.textContent= "";
  successMsg.textContent = "";
  let isValid= true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(email === ""){
    emailError.textContent= "Email is required";
    isValid= false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email";
    isValid= false;
  }
  if(password === ""){
    passwordError.textContent= "Password is required";
    isValid= false;
  } else if(password.length < 6){
    passwordError.textContent= "Password must be at least 6 characters";
    isValid= false;
  }
  if (isValid){
    successMsg.textContent= "Login Successful!";
  }
});
