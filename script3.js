//==========READ MORE==========//
function showmore(){
    let text = document.getElementById("moreText");
    let button =document.querySelector(".read-btn");
    if(text.innerHTML === ""){
        text.innerHTML=
               "MY goal is to improve my programming skills and build useful real-world projects.";
        button.innerHTML="Read Less";        
    } else{
        text.innerHTML="";
        button.innerHTML="Read More ";

    }
}
// ======================contact form ================
document
       .getElementById("contactForm")
       .addEventListener("submit",function(event){
        event.preventDefault();
        let name =
           document.getElementById("name").value.trim();
        let email =
            document.getElementById("email").value.trim();
        let phone =
            document.getElementById("phone").value.trim();
        let message =
            document.getElementById("message").value.trim();
        let status =
            document.getElementById("status");
     //check empty fields 
      if (name ===""|| email ===""|| message ==="") {
        status.innerHTML=
             "❌ Please fil all required fields.";
        status.style.color ="red";
        return;
      } 
      // create whatsapp message 
      let whatsappMessage =
      "Hello Rahul!" +
       "%0A%0A" +
       "Name:" + encodeURIComponent(name)+
       "%0A" +
       "Email:" + encodeURIComponent(email)+
       "%0A"
       "Phone:" + encodeURIComponent(phone)+
       "%0A%0A" +
       "Message:" + encodeURIComponent(message);
       let whatsappNUmber ="919821603387";
       let whatsappURL=
            "https://wa.me/" +
            whatsappNUmber +
            "?text=" +
            whatsappMessage;
            window.open(whatsappURL, "_blank");
            status.innerHTML=
                "✅ Openning Whatsapp...";
            status.style.color = "#00eaff";
            //clearform
            document.getElementById("contactForm").reset();
        
    });
    const bgMusic =document.getElementById("bgMusic");
    const musicBtn =document.getElementById("musicBtn");
    musicBtn.addEventListener("click",function(){
        if(bgMusic.paused){
            bgMusic.play();
            musicBtn.innerHTML= "🔊Music on ";
        } else {
            bgMusic.pause();
            musicBtn.innerHTML="🔇Music Off";
        }
    });