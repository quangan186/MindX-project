let itemsList = JSON.parse(localStorage.getItem("lists"));

var carts = document.querySelectorAll(".add_btn");
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(itemsList[i]);
    totalCost(itemsList[i]);
    removeButton(itemsList[i])
  });
}

function cartNumbers(product) { 
  let numberOfProducts = localStorage.getItem("cartNumbers");
  numberOfProducts = parseInt(numberOfProducts); 
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (numberOfProducts) {
    // if user clicks "add to cart" button
    if (cartItems != null && cartItems[product.name] == undefined) {
      // if there is a product in cart and users add the different items
      localStorage.setItem("cartNumbers", numberOfProducts + 1);
      document.querySelector(".btn span").textContent = numberOfProducts + 1;
    }
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".btn span").textContent = 1;
  }
  
  setItems(product);
}

function removeButton(product){
  let current_btn = document.getElementById(`${product.btn_number}`)
  let new_btn = document.createElement("h1") 
  new_btn.className = "new_btn"
  new_btn.innerHTML = "Added"
  if (product.btn_number == 1){
    current_btn.parentNode.replaceChild(new_btn, current_btn)
  }

  if (product.btn_number == 2){
    current_btn.parentNode.replaceChild(new_btn, current_btn)
  }

  if (product.btn_number == 3){
    current_btn.parentNode.replaceChild(new_btn, current_btn)
  }

  if (product.btn_number == 4){
    current_btn.parentNode.replaceChild(new_btn, current_btn)
  }

  if (product.btn_number == 5){
    current_btn.parentNode.replaceChild(new_btn, current_btn)
  }

  if (product.btn_number == 6){
    current_btn.parentNode.replaceChild(new_btn, current_btn)
  }
}

// keep the quantity that user adds to cart even when they reload page
function onLoadCartNunmbers() {
  let numberOfProducts = localStorage.getItem("cartNumbers");
  if (numberOfProducts) {
    document.querySelector(".btn span").textContent = numberOfProducts;
  }
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    // if there is a product in cart and users add the same items
    if (cartItems[product.name] == undefined) {
      // if there is a product in cart and users add the different items
      cartItems = {
        // new cart include the previous items and new item
        ...cartItems,
        [product.name]: product,
      };
    }
    product.inCart = 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.name]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartCost != null) {
    if (cartItems[product.name] != undefined) {
      cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost", cartCost + product.price);
    }
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function btnFunction(){
  let homeBtn = document.querySelector(".home_btn")
  homeBtn.addEventListener('click', homeBtnFunction)
  function homeBtnFunction(){
      window.location.href = "../index.html"
  }
}

btnFunction();

onLoadCartNunmbers();
