let itemsList = JSON.parse(localStorage.getItem("lists"));
var cart = [];
var carts = document.querySelectorAll(".add_btn");
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    console.log(itemsList[i])
    setItems(itemsList[i]);
    cartNumbers(itemsList[i]);
    removeButton(i)
    
  });
  console.log(itemsList)
}

function cartNumbers() { 
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  // console.log(cartItems)
  if (cartItems.length == 0) {
    document.querySelector(".btn span").textContent = "0";
  } else{
    document.querySelector(".btn span").textContent = cartItems.length;
  }
}

function removeButton(index){ 
  itemsList[index]["isAdded"] = true;
  localStorage.setItem("lists", JSON.stringify(itemsList))
  let current_btn = document.querySelectorAll(".add_btn");
  current_btn[index].style.background = "grey";
  current_btn[index].innerHTML = "Added"
  current_btn[index].disabled = true;
}

// keep the quantity that user adds to cart even when they reload page
function onLoadCartNunmbers() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems.length == 0) {
    document.querySelector(".btn span").textContent = "0";
  } else{
    document.querySelector(".btn span").textContent = cartItems.length;
  }
}

function setItems(product, index) {
  // set isAdded = true
  for ( let i =0; i < itemsList.length; i++){

  }
  // add items to cart
  let newCart = JSON.parse(localStorage.getItem("productsInCart"))
  if (newCart != null){
    if (newCart.length > 0){
      cart = newCart
      cart.push(product)
      localStorage.setItem("productsInCart", JSON.stringify(cart));
    }else{
      cart.push(product)
      localStorage.setItem("productsInCart", JSON.stringify(cart));
    }
  } else{
    cart.push(product)
    localStorage.setItem("productsInCart", JSON.stringify(cart));
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
