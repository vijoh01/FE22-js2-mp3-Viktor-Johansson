export default class Product {
    name;
    price;
    imgURL;
    amount;

    constructor(name, price, amount, imgURL) {
        this.name = name;
        this.price = price;
        this.imgURL = imgURL;
        this.amount = amount;
    }
}