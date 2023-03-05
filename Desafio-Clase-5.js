const fs = require("fs");

class ProductManager {
  constructor(filename) {
    this.products = [];
    this.path = "./files";
    this.filename = this.path + filename;
  }
  addProduct = async (title, description, price, thumbnail, code, stock) => {
    await fs.promises.mkdir(this.path, { recursive: true });
    if (!(title && description && price && thumbnail && code && stock)) {
      throw new Error("All fields are required");
    } else if (this.products.find((product) => product.code === code)) {
      throw new Error("Product already exists");
    } else {
      this.products.push({
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      });
      await fs.promises.writeFile(this.filename, JSON.stringify(this.products));
    }
  };
  getProducts = async () => {
    const data = await fs.promises.readFile(this.filename, "utf-8");
    this.products = JSON.parse(data);
    return this.products;
  };
  getProductById = async (code) => {
    const data = await fs.promises.readFile(this.filename, "utf-8");
    this.products = JSON.parse(data);
    return this.products.find((product) => product.code === code);
  };
  updateProductById = async (id, updatedData) => {
    let result = await fs.promises.readFile(this.filename)
    let parsedRes = await JSON.parse(result)

    if (await this.getProductById(id)) {
      const newArr = parsedRes.map((item) => {
        return id == item.prodId ? { ...item, ...updatedData } : item
        console.log('Product updated succesfully')
      })
      await fs.promises.writeFile(this.filename, JSON.stringify(newArr))
    } else {
      console.log(`Product ID ${id} does not exist`)
    }
  }

  deleteProductById = async (id) => {
    let result = await fs.promises.readFile(this.filename)
    let parsedRes = await JSON.parse(result)

    if (await this.getProductById(id)) {
      const newArr = parsedRes.filter((item) => item.prodId !== id)
      await fs.promises.writeFile(this.filename, JSON.stringify(newArr))
      console.log('Product deleted succesfully')
    } else {
      console.log(`Product ID ${id} does not exist`)
    }
  }
}
