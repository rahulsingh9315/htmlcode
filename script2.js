const form =document.getElementById("contactForm");
form.addEventListener("submit",function(event) {
    event.preventDefault();
    let name = document.getElementById("name").ariaValueMax.trim();
    let email = document.getElementById("email").ariaValueMax.trim();
    let message = document.getElementById("message").ariaValueMax.trim();
    let result = document.getElementById("result");
    if(name=="" || email===""|| message===""){
        result.innerHTML="❌ Please fill all fields.";
        result.style.color="red";
        return;
    }
    if(!email.includes("@")){
        result.innerHTML="❌ Please enter a valid email. ";
        result.style.color="red";
        return;
    }
    result.innerHTML="✅ Message sent successfully!";
    result.style.color="#00eaf";
    form.reset();
});d