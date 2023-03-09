export default class CartButton {
    
    #size;
    #container;
    #h1;
    #cart;

    constructor() {
        this.#container = document.createElement('div');
        $(this.#container).attr("class", "cartBtn")
        this.#cart = document.createElement('i');
        
        this.#cart.setAttribute('data-feather', 'shopping-cart');
        this.#container.append(this.#cart);  
        $('header').append(this.#container);
    }

    getSize() {
        return this.#size;
    }

    increase(size) {
        if (this.#h1 != null) {
            this.#h1.innerText = size;
        } else {
            this.#container.innerHTML = "";
            this.#h1 = document.createElement('h1');
            this.#h1.innerText = size;
            this.#container.append(this.#h1);
            this.#container.append(this.#cart);
        }
    }
}