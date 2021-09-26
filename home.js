function btnFunction(){
    let homeBtn = document.querySelector(".home_btn")
    homeBtn.addEventListener('click', homeBtnFunction)
    function homeBtnFunction(){
        window.location.href = "./index.html"
    }
}

btnFunction();