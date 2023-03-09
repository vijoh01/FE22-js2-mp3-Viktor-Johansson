import "../node_modules/jquery/dist/jquery.js";
import "../node_modules/feather-icons/dist/feather.js";
import ProductCard from "./components/ProductCard.js";
import Product from "./models/Product.js";
import CartButton from "./components/CartButton.js";
import db from "./models/db.js";

$(async () => {
    let products = [
        new Product("shiftnyckel", 12, 20, "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="),
        new Product("Tandborsten", 12, 40, "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="),
        new Product("katt", 12, 40, "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="),
        new Product("kanin", 12, 50, "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="),
        new Product("robot", 12, 30, "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="),
    ];

    let database = new db(); 

    products.forEach(async product => {
        console.log(product);
        await database.upsertProduct(product);
    });

    database.getProducts().then(products => {
        products.forEach(product => {
            console.log(product);
            let card = new ProductCard(product)
            $('#container').append(card);
      
            feather.replace();
        }) 
    }).then(() => {
        let cartBtn = new CartButton();
        let storageLength = Object.values(getCart()).length;

        Object.values(getCart()).forEach(cart => {
            if (cart <= 0) {
                storageLength--;
            }
        })
        if (!(storageLength <= 0))
        cartBtn.increase(storageLength);

        
        $('.card form button').on('click', (e) => {
            e.preventDefault();
            let target = $(e.target).parents('.card').children();
            //localStorage.removeItem('cart');
            storageLength = Object.values(getCart()).length;
            let amount = parseInt(target[3][0].value);
            

            
            addToCart(target[1].innerText, amount);
            
            Object.values(getCart()).forEach(cart => {
                if (cart <= 0) {
                    storageLength--;
                }
            })

            cartBtn.increase(storageLength);
            feather.replace();
        })
        $('.cartBtn').on('click', (e) => {
            location.href = '../html/ShoppingCart.html';
        })
        feather.replace();
    })

    function addToCart(name, amount) {
        let cart = JSON.parse(localStorage.getItem("cart")) || {};
        if (cart[name]) {
            cart[name] += amount;
        } else {
            cart[name] = amount;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    }


    function getCart() {
        return JSON.parse(localStorage.getItem("cart")) || {};
    }


    feather.replace();
})



