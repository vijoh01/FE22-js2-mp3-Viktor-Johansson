export default class Product {
    #name;
    #price;
    #imgURL;

    constructor(name, price, imgURL) {
        this.#name = name;
        this.#price = price;
        this.#imgURL = imgURL;
    }

    getName() {
        return this.#name;
    }

    getPrice() {
        return this.#price;
    }

    getImageURL() {
        return this.#imgURL;
    }
}