class ProductManager {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    static products = []
    idUnico = () => ProductManager.products.length + 1;
    addProducts(product) {
        if (product.title !== "" && product.description !== "" && product.price > 0 && product.thumbnail !== "" && product.code > 0 && product.stock > 0) {
            product.id = this.idUnico()
            if ((ProductManager.products.some(num => num.code == product.code)) !== true) {
                ProductManager.products.push(product)
                console.log(`Se agrego ${product.title}`);
            } else {
                console.log("este producto ya fue agregado");
            }
        } else {
            console.log("Todos los campos son obligatorios");
        }
    }
    getProducts = () => {
        let productosObtenidos = ProductManager.products.map(products => products.title)
        return console.log(`Productos solicitados: ${productosObtenidos}`);
    }
    getProductById(id) {
        let product = ProductManager.products.find(product => product.id === id)
        if (product) {
            return console.log(product.title);
        } else {
            console.log("No se econtro");
        }
    }
}

let productos = new ProductManager()

productos.addProducts({ title: "remera", description: "remeras", price: 173450, thumbnail: "remera.png", code: 787, stock:  99})

productos.addProducts({title: "pantalon",description: "pantalones",price: 45660,thumbnail: "pantalon.png",code: 187,stock: 89})

productos.addProducts({ title: "zapatillas", description: "zapatillas", price: 8888, thumbnail: "zapatilla.png", code: 1787, stock: 48 })
productos.getProductById(2)

productos.getProducts()