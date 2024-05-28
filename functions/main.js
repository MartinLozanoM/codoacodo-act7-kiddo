const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
    iconEye = document.getElementById(loginEye);

    iconEye.addEventListener("click", () => {
        if(input.type === "password"){
            input.type = "text";

            iconEye.classList.add("fa-eye");
            iconEye.classList.remove("fa-eye-slash");
        } else {
            input.type = "password";
            
            iconEye.classList.remove("fa-eye");
            iconEye.classList.add("fa-eye-slash");
        }
    })
};

showHiddenPass("login-pass","login-eye");

const showHiddenElement = (element) => {
    const elementLink = document.getElementById(element);
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    elementLink.addEventListener("click", () => {
        if(element === "register-link") {
            loginForm.classList.add("hide");
            registerForm.classList.remove("hide")
        } else if (element === "login-link") {
            loginForm.classList.remove("hide");
            registerForm.classList.add("hide")
        }
    })
}

showHiddenElement("register-link");
showHiddenElement("login-link");