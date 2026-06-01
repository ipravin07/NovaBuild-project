const form = document.getElementById("signupForm");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const name= document.getElementById("name").value.trim();
    const email= document.getElementById("email").value.trim();
    const password= document.getElementById("password").value;
    const confirmPassword= document.getElementById("confirmPassword").value;

    document.getElementById("nameError").textContent= "";
    document.getElementById("emailError").textContent= "";
    document.getElementById("passwordError").textContent= "";
    document.getElementById("confirmPasswordError").textContent= "";
    document.getElementById("successMsg").textContent= "";

    let isValid= true;
    if(name === ""){
        document.getElementById("nameError").textContent="Name is required";
        isValid= false;
    }
    
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
        document.getElementById("emailError").textContent="Email is required";
        isValid= false;
    }
    else if(!emailPattern.test(email)){
        document.getElementById("emailError").textContent="Enter a valid email";
        isValid = false;
    }
    if(password.length < 8){
        document.getElementById("passwordError").textContent="Password must be at least 8 characters";
        isValid= false;
    }
    if(confirmPassword !== password){
        document.getElementById("confirmPasswordError").textContent="Passwords do not match";
        isValid = false;
    }
    if(isValid){
        document.getElementById("successMsg").textContent=
        "Account created successfully!";
        form.reset();
    }
});