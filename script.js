const forms= document.querySelector(".forms"),
        pwShowHide = document.querySelectorAll(".fa-eye-slash"),
        links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeSlash=> {
    eyeSlash.addEventListener("click", () => {
        let pwFields = eyeSlash.parentElement.parentElement.querySelectorAll(".password");
  
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeSlash.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeSlash.classList.replace("bx-show", "bx-hide");
        })

    })
})