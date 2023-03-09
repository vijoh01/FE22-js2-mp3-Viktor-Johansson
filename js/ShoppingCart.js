import CartButton from "./components/CartButton.js";
import "../node_modules/jquery/dist/jquery.js";
import "../node_modules/feather-icons/dist/feather.js"
import db from './models/db.js';
import CartCard from "./components/CartCard.js";

$(() => {
    let database = new db();

    function getCart() {
        return JSON.parse(localStorage.getItem("cart")) || {};
    }


    let cartBtn = new CartButton();

    console.log(getCart());
    let keyArr = Object.keys(getCart());
    let totalCost = 0;
    let productArr = [];
    database.getProducts().then(prodArr => {

        function loadCards() {
            productArr = [];
            totalCost = 0;
            keyArr = Object.keys(getCart());
            $('#cartContainer').empty();
            prodArr.forEach((product) => {

                if (keyArr.includes(product.name) && getCart()[product.name] != 0) {
                    productArr.push(product);
                    console.log(getCart());
                    totalCost += getCart()[product.name] * product.price;
                    let cartCard = new CartCard(product, getCart()[product.name]);
                    $('#cartContainer').append(cartCard);
                    feather.replace();
                    $('.closeBtn').on('click', (e) => {
                        let target = $(e.target).parents('.cartCard').children();
                        //localStorage.removeItem('cart');
            
                        let clickedName = target[2].innerText.replace('Item: ', '');
                        keyArr.forEach((key, index) => {
                            if (key.includes(clickedName)) {
            
                                let newCart = getCart();
                                newCart[clickedName] = 0;
                                localStorage.setItem('cart', JSON.stringify(newCart));
                                loadCards();
                            }
                        })

                  
                        total.innerText = "Total: " + totalCost + ":-";

                    })
                    
                }
                
            });
            storageLength = Object.values(getCart()).length;


            Object.values(getCart()).forEach(cart => {
                if (cart <= 0) {
                    storageLength--;
                }
            })
            
            cartBtn.increase(storageLength);
            
        }

        loadCards();

        let total = document.createElement('h1');
        total.className = "totalCost";
        total.innerText = "Total: " + totalCost + ":-";
        $("#total").append(total);

        let buy = document.createElement('button');
        buy.className = "buyBtn";
        buy.innerText = "Buy";
        $("#total").append(buy);

        $('.buyBtn').on('click', (e) => {
            console.log("test");
            productArr.forEach(product => {
                product.amount -= getCart()[product.name];
                database.upsertProduct(product);
                let newCart = getCart();
                newCart[product.name] = 0;
                localStorage.setItem('cart', JSON.stringify(newCart));
                loadCards();       
                total.innerText = "Total: " + totalCost + ":-";
            })
        })
        feather.replace();
        
    })

    $('.logo').on('click', () => {
        location.href = '../index.html';
    })

    let storageLength = Object.values(getCart()).length;

    //$("total")

    Object.values(getCart()).forEach(cart => {
        if (cart <= 0) {
            storageLength--;
        }
    })
    if (!(storageLength <= 0))
        cartBtn.increase(storageLength);

    feather.replace();
})