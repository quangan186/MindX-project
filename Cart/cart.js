function displayItems(){
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems)
    let cartCost = localStorage.getItem("totalCost")
    let productContainer = document.querySelector(".products")
    if (cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class= "product">
                <i class="fas fa-times-circle"></i>
                <img src = "${item.image}">
                <span>${item.name}</span>
            </div>

            <div class = "cost">${new Intl.NumberFormat().format(item.price)} VND</div>

            <div class = "total_products"> 
                ${new Intl.NumberFormat().format(item.inCart * item.price)} VND
            </div>
             `
        })
            productContainer.innerHTML += `
            <div class = "basketTotal"> 
                <h1 class = "basket"> 
                Total: 
                </h1>

                <h1 class = "basketPrice">
                ${new Intl.NumberFormat().format(cartCost)} VND
            </div>
            `
       
    }
}

displayItems();