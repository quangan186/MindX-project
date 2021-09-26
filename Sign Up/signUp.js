function btnFunction(){
    let LogInBtn = document.querySelector(".log_in")
    LogInBtn.addEventListener('click', goToLogIn)
    function goToLogIn(){
        window.location.href = "../Login/login.html"
    }

    let HomeBtn = document.getElementById("back_btn")
    HomeBtn.addEventListener('click', backToHome)
    function backToHome(){
        window.location.href = "../index.html"
    }
}

btnFunction();