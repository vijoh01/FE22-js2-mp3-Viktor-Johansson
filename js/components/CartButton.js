export default class CartButton {
    
    #size;
    #container;
    #h1;
    #cartSize;
    #cart;

    constructor() {
        this.#cartSize = 1;
        this.#container = document.createElement('div');
        this.#cart = document.createElement('i');
   
        this.#cart.setAttribute('data-feather', 'shopping-cart');
        this.#container.append(this.#cart);  
        $('header').append(this.#container);
    }


    getSize() {
        return this.#size;
    }

    increase() {
        if (this.#h1 != null) {
            this.#h1.innerText = this.#cartSize++;
        } else {
            this.#container.innerHTML = "";
            this.#h1 = document.createElement('h1');
            this.#h1.innerText = this.#cartSize++;
            this.#container.append(this.#h1);
            this.#container.append(this.#cart);
        }
    }
}