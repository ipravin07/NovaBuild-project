document.getElementById("forgotForm").addEventListener("submit", function (e){
  e.preventDefault();

  const email= document.getElementById("email").value.trim();
  const emailError= document.getElementById("emailError");
  const successMsg= document.getElementById("successMsg");

  emailError.textContent= "";
  successMsg.textContent= "";

  const emailPattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(email === "") {
    emailError.textContent= "Email is required";
    return;
  }
  if(!emailPattern.test(email)){
    emailError.textContent= "Enter a valid email address";
    return;
  }
  successMsg.textContent= "Password reset link has been sent to your email.";
});
