export default class db {
    
    #url;
    #products;

    constructor() {
        this.#url = "https://mp3-nervi-default-rtdb.europe-west1.firebasedatabase.app/";
        this.#products = [];
    }

    async upsertProduct(product) {
        await this.#fetchProducts();

        //if (!this.#updateProduct(product)) {
            this.#products.push(product); 
        //}
    
        const init = {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify( this.#products ),
            method: "PUT",
        }
    
        await fetch(this.#url, init);
    }

    /*#updateProduct(_product) {
        return products.some(user => {
            if (user.userTag === obj.userTag) {
                if (obj.score > user.score)
                user.score = obj.score;
                return true;
            }
        }) 
    }*/


    async #fetchProducts() {
        const fetches = await fetch(this.#url);

        const data = await fetches.json();

        const products = Object.values(data);

        this.#products = products;
    }

}