function btnFunction(){
    // let LogInBtn = document.querySelector(".log_in")
    // LogInBtn.addEventListener('click', goToLogIn)
    // function goToLogIn(){
    //     window.location.href = "../Login/login.html"
    // }

    let HomeBtn = document.getElementById("back_btn")
    HomeBtn.addEventListener('click', backToHome)
    function backToHome(){
        window.location.href = "../index.html"
    }
}

function saveInfo(){
    let firstName = document.getElementById("fname")
    let lastName = document.getElementById("l_name")
    let dateOfBirth = document.getElementById("birthday")
    let gender = document.getElementById("sex")
    let userName = document.getElementById("email")
    let password = document.getElementById("password")
    let reTypePassword = document.getElementById("password2")
    let check = false;

    let btn = document.querySelector(".log_in")
    btn.addEventListener('click', () => {
        // if (firstName.value.length != 0){
            
        //     check = true
        // } else{
        //     document.getElementById("1").style.display = "block"
        //     check = false
        // }
            
        if (!checkLength(firstName)){
            document.getElementById("1").style.display = "block"
            // return;
        }

        if (!checkLength(lastName)){
            document.getElementById("2").style.display = "block"
            // return;
        }
            
        if (!checkLength(dateOfBirth)){
            document.getElementById("3").style.display = "block"
            // return;
        }

        if (!checkLength(dateOfBirth)){              
            document.getElementById("5").style.display = "block"
            // return;
        }
        
        if (!checkLength(password)){
            document.getElementById("6").style.display = "block"
            // return;
           
        }

        if (!checkLength(reTypePassword)){
            document.getElementById("7").style.display = "block"
            return;
        }

        if (password.value != reTypePassword.value){
           alert("Wrong password")
           return;
        }
        
        
            localStorage.setItem("f_name", firstName.value)
            localStorage.setItem("l_name", lastName.value)
            localStorage.setItem("date", dateOfBirth.value)
            localStorage.setItem("gender", gender.value)
            localStorage.setItem("email", userName.value) 
            localStorage.setItem("password", password.value)
            window.location.href = "../Login/login.html"
        

            
            
        
    })
    
}

function checkLength(dom){
    if (dom.value.length > 0){
        return true;
    } else{
        return false;
    }
}

btnFunction();
saveInfo();