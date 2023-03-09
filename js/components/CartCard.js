export default class CartCard {
    
    constructor (product, amount) {
    const container = document.createElement('div');
    container.className = "cartCard";

    let close = document.createElement('i');
    close.className = "closeBtn"
    close.setAttribute('data-feather', 'x');
    container.append(close);  

    const imgContainer = document.createElement('div');
    imgContainer.className = "imgContainer";
    const img = document.createElement('img');
    img.src = product.imgURL;
    imgContainer.append(img);

    container.append(imgContainer);
    console.log(amount);
    const name = document.createElement('h1');
    name.innerText = "Item: " + product.name;
    container.append(name);

    const amountElement = document.createElement('p');
    amountElement.innerText = amount + " x " + product.price + ":-";
    container.append(amountElement);

    const price = document.createElement('p');
    price.innerText = "Price: " + amount*product.price + ":-";
    container.append(price);

    return container;
    }
}