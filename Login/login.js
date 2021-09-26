function btnFunction(){
    let signUpBtn = document.querySelector(".sign_up")
    signUpBtn.addEventListener('click', goToSignUp)
    function goToSignUp(){
        window.location.href = "../Sign Up/signup.html"
    }

    let HomeBtn = document.getElementById("back_btn")
    HomeBtn.addEventListener('click', backToHome)
    function backToHome(){
        window.location.href = "../index.html"
    }

    let LogInBtn = document.querySelector(".log_in")
    LogInBtn.addEventListener('click', goToHome)
    function goToHome(){
        window.location.href = "../index.html"
    }
}

btnFunction();