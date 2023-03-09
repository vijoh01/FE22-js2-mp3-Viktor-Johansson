export default class db {

    #url;
    #products;

    constructor() {
        this.#url = "https://mp3-nervi-default-rtdb.europe-west1.firebasedatabase.app/products.json";
        this.#products = [];
    }

    async upsertProduct(product) {
        await this.getProducts();

        if (!await this.#updateProduct(product)) {
            this.#products.push(product);
        }

        const init = {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(this.#products),
            method: "PUT",
        }

        await fetch(this.#url, init);
    }

    async inStock(product) {
        if (product.amount <= 0) {
            return product;
        }
    }

    async #updateProduct(_product) {
        return this.#products.some(products => {
            if (products.name === _product.name) {
                products.price = _product.price;
                products.imgURL = _product.imgURL;
                products.amount = _product.amount;
                return true;
            }
        })
    }

    async getProducts() {
        const fetches = await fetch(this.#url);

        const data = await fetches.json();

        const products = Object.values(data);

        this.#products = products;

        return this.#products;
    }

}