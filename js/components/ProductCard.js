export default class ProductCard {

    constructor (product) {
    const container = document.createElement('div');
    container.className = "card " + product.name;

    const imgContainer = document.createElement('div');
    imgContainer.className = "imgContainer";
    const img = document.createElement('img');
    img.src = product.imgURL;
    imgContainer.append(img);

    container.append(imgContainer);

    const name = document.createElement('h1');
    name.innerText = product.name;
    container.append(name);

    const price = document.createElement('p');
    price.innerText = product.price + ":-";
    container.append(price);

    const form = document.createElement('form');

    const quantity = document.createElement('input');
    quantity.type = "number";
    quantity.min = quantity.value = "1";
    form.append(quantity);

    const iconBtn = document.createElement('button');
    if (product.amount <= 0) {
        iconBtn.disabled = true;
    }
    const button = document.createElement('i');
    button.setAttribute("data-feather", "shopping-bag");

    iconBtn.append(button);

    form.append(iconBtn)

    container.append(form);

    return container;
    }
}