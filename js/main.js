import "../node_modules/jquery/dist/jquery.js";
import "../node_modules/feather-icons/dist/feather.js";
import ProductCard from "./components/ProductCard.js";
import Product from "./models/Product.js";
import CartButton from "./components/CartButton.js";
import db from "./models/db.js";

$(() => {

    let products = [
        new Product("Tandborste", 12, "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="),
        new Product("Tandborste", 12, "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="),
        new Product("Tandborste", 12, "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="),
        new Product("Tandborste", 12, "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="),
        new Product("Tandborste", 12, "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="),
    ];
    
    let database = new db();

    database.upsertProduct(products[0]);

    products.forEach(product => {
        $('#container').append(new ProductCard(product));
    })
    $('#container').append(new ProductCard(new Product("Tandborste", 12, "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=")));
    $('#container').append(new ProductCard(new Product("Tandborste", 120.50, "https://darlingeco.se/wp-content/uploads/2022/04/rutines_bamboo_toothbrush_detail_1_webshop_final.jpg")));
 

    
    let cartBtn = new CartButton();
    
    $('.card form div').on('click', () => {
        cartBtn.increase();
        feather.replace();
      
    })
    feather.replace();
})



