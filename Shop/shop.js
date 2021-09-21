class Product{
    constructor(image, name, price){
        this.image = image
        this.name = name
        this.price = price
    }

    createProduct(){
        var container = document.createElement("div")
        var img = document.createElement("img")
        var Product_name = document.createElement("h1")
        var Product_price = document.createElement("p")

        img.append(this.image)
        Product_name.append(this.name)
        Product_price.append(this.price)

        container.appendChild(img)
        container.appendChild(Product_name)
        container.appendChild(Product_price)
    }
}

var p1 = new Product("https://cdn.cloudflare.steamstatic.com/steam/apps/1644960/capsule_616x353.jpg?t=1631741026", "NBA 2K22", 1100000)
p1.createProduct();