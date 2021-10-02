class Product{
    constructor(image, name, price, btn_number){
        this.image = image
        this.name = name
        this.price = price 
        this.btn_number = btn_number
        this.inCart = 0;
        this.isAdded = false;
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
            Product_price.append("Price: " + new Intl.NumberFormat().format(this.price) + " VND")
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
            addToCart_btn.className = `add_btn`
            addToCart_btn.id = `${this.btn_number}`
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

function main(){
    let newList = JSON.parse(localStorage.getItem("lists"))
    if ( newList != null){
        localStorage.setItem("lists", JSON.stringify(newList))   
        let p7 = new Product("https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg", "Fornite","Free", 7)
        p7.createProduct();
           
        let p8 = new Product("https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LandscapeProductImage_2560x1440_2560x1440-5962106d6d94a5fd6db07bb922166f0a", "Rocket league", "Free", 8)
        p8.createProduct();
         
        let p9 = new Product("https://freegametips.com/wp-content/uploads/2020/08/1596875971_Genshin-Impact-Impressions-A-promising-action-packed-adventure.jpg", "Genshin Impact","Free", 9)
        p9.createProduct();
        
        let p10 = new Product("https://autochessvng.com/upload/product/4355-11-new.png", "Auto Chess", "Free", 10)
        p10.createProduct();  
    } else{
        let p1 = new Product("https://cdn.cloudflare.steamstatic.com/steam/apps/1644960/capsule_616x353.jpg?t=1631741026", "NBA 2K22", 1100000, 1)
            
            let p2 = new Product("https://cdn1.epicgames.com/salesEvent/salesEvent/1bbe911a-6c89-490c-9230-cdd99c3be4b5_2560x1440-1c47786e1130e040a090368a1551a627", "A Plague Tale: Innocence",300000, 2)
            
            let p3 = new Product("https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_LifeIsStrangeTrueColors_image1600w.jpg", "Life is Strange: True color",330000, 3)
            
            let p4 = new Product("https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1621939214", "The Witcher 3: Wild Hunt",450000, 4)
            
            let p5 = new Product("https://cdn.akamai.steamstatic.com/steam/apps/374320/capsule_616x353.jpg?t=1608544497", "DARK SOULS III", 970000, 5)
            
            let p6 = new Product("https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg?h=270&resize=1&w=480", "Assassin's Creed Valhalla", 600000, 6)
             
            let p7 = new Product("https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg", "Fornite","Free", 7)
            p7.createProduct();
               
            let p8 = new Product("https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LandscapeProductImage_2560x1440_2560x1440-5962106d6d94a5fd6db07bb922166f0a", "Rocket league", "Free", 8)
            p8.createProduct();
             
            let p9 = new Product("https://freegametips.com/wp-content/uploads/2020/08/1596875971_Genshin-Impact-Impressions-A-promising-action-packed-adventure.jpg", "Genshin Impact","Free", 9)
            p9.createProduct();
            
            let p10 = new Product("https://autochessvng.com/upload/product/4355-11-new.png", "Auto Chess", "Free", 10)
            p10.createProduct();

            let lists= []; // contain the products which are not free
            lists.push(p1)
            lists.push(p2)
            lists.push(p3)
            lists.push(p4)
            lists.push(p5)
            lists.push(p6)
            localStorage.setItem("lists", JSON.stringify(lists))

            
    }

    
}

main();

function renderAllProducts(array, positionDOM) {
    for (const item of array) {
      positionDOM.innerHTML += `
        <div class="item">
            <img src="${item.image}"/>
            <div class="info">
                <h1>${item.name}</h1>
                <p>Price: ${new Intl.NumberFormat().format(item.price)} VND</p>
            </div>

            ${item['isAdded'] == false ? '<button class="add_btn"> <i class="fas fa-cart-plus"></i> Add to Cart </button>': '<button class="new_btn" disabled> Added </button>'}
            
        </div>
          `;
    }
}

renderAllProducts(JSON.parse(localStorage.getItem("lists")), document.getElementById("container"))