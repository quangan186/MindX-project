class Product{
    constructor(image, name, price){
        this.image = image
        this.name = name
        this.price = price 
    }

    createImage(){
        var img = document.createElement("img")
        img.src = this.image
        return img
    }

    createGameName(){
        var Product_name = document.createElement("h1")    
        Product_name.append(this.name)
        return Product_name
    }

    createGamePrice(){
        var Product_price = document.createElement("p")
        if (this.price == "Free"){
            Product_price.append("Price: " + this.price)
        } else{
            Product_price.append("Price: " + this.price + " VND")
        }
        return Product_price
    }

    createInfo(){
        var info = document.createElement("div")
        info.className = "info"
        var name = this.createGameName();
        var cost = this.createGamePrice();
        info.appendChild(name)
        info.appendChild(cost)
        return info
    }

    createButton(){
        var addToCart_btn = document.createElement("button")
        if (this.price == "Free"){
            addToCart_btn.innerHTML = '<i class="fas fa-download"></i> Install'
            
        } else{
            addToCart_btn.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart'
            addToCart_btn.className = "add_btn"
        }
        addToCart_btn.addEventListener('click', goToCart)
        function goToCart(){
            if (addToCart_btn.innerHTML == '<i class="fas fa-cart-plus"></i> Add to Cart')
            window.location.href = "../Cart/cart.html"
        }
        return addToCart_btn
    }

    createProduct(){
        // create div and assign class name for element
        var item = document.createElement("div")
        item.className = "item"
        var img = this.createImage();
        var info = this.createInfo();
        var btn = this.createButton();
        item.append(img)
        item.append(info)
        item.append(btn)

        // add product's container to body
        document.getElementById("container").appendChild(item)
    }
}

var p1 = new Product("https://cdn.cloudflare.steamstatic.com/steam/apps/1644960/capsule_616x353.jpg?t=1631741026", "NBA 2K22","1.100.000")
p1.createProduct();

var p2 = new Product("https://cdn1.epicgames.com/salesEvent/salesEvent/1bbe911a-6c89-490c-9230-cdd99c3be4b5_2560x1440-1c47786e1130e040a090368a1551a627", "A Plague Tale: Innocence","300.000")
p2.createProduct();

var p3 = new Product("https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_LifeIsStrangeTrueColors_image1600w.jpg", "Life is Strange: True color","330.000")
p3.createProduct();

var p4 = new Product("https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1621939214", "The Witcher 3: Wild Hunt","450.000")
p4.createProduct();

var p5 = new Product("https://cdn.akamai.steamstatic.com/steam/apps/374320/capsule_616x353.jpg?t=1608544497", "DARK SOULS III", "970.000")
p5.createProduct();

var p6 = new Product("https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg?h=270&resize=1&w=480", "Assassin's Creed Valhalla", "600.000")
p6.createProduct();

var p7 = new Product("https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg", "Fornite","Free")
p7.createProduct();

var p8 = new Product("https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LandscapeProductImage_2560x1440_2560x1440-5962106d6d94a5fd6db07bb922166f0a", "Rocket league", "Free")
p8.createProduct();

var p9 = new Product("https://freegametips.com/wp-content/uploads/2020/08/1596875971_Genshin-Impact-Impressions-A-promising-action-packed-adventure.jpg", "Genshin Impact","Free")
p9.createProduct();

var p10 = new Product("https://autochessvng.com/upload/product/4355-11-new.png", "Auto Chess", "Free")
p10.createProduct();