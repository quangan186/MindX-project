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

    // let LogInBtn = document.querySelector(".log_in")
    // LogInBtn.addEventListener('click', goToHome)
    // function goToHome(){
    //     window.location.href = "../index.html"
    // }
}

function checkLogin(){
    let email_input = document.querySelector("#email")
    let password_input = document.querySelector("#password")

    let email_check = localStorage.getItem("email")
    let password_check = localStorage.getItem("password")

    let LogInBtn = document.querySelector(".log_in")

    LogInBtn.addEventListener('click', goToHome)
    function goToHome(){
        if (email_input.value == email_check && password_input.value == password_check){
            window.location.href = "../index.html"
        } else{
            document.getElementById("warn").style.display = "block"
        }
    }
    
}

checkLogin();
btnFunction();