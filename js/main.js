
 let array = ([
    {
        "ProductID": 1,
        "ProductName": "Chai",
        "UnitPrice": 18,
        "UnitsInStock": 39,
        "DeliveryOn": new Date(1996, 8, 20),
        "Picture": "img/tea.jpg"
    },
    {
        "ProductID": 2,
        "ProductName": "Chang",
        "UnitPrice": 19,
        "UnitsInStock": 17,
        "DeliveryOn": new Date(1996, 7, 12),
        "Picture": "img/chang.jpg"
    },
    {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "UnitPrice": 10,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 8, 26),
        "Picture": "img/aniseed-syrup.jpg"
    },
    {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "UnitPrice": 22,
        "UnitsInStock": 53,
        "DeliveryOn": new Date(1996, 9, 19),
        "Picture": "img/cajun-seasoning.jpg"
    },
    {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 7, 17),
        "Picture": "img/gumbo-mix.jpg"
    },
    {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "UnitPrice": 25,
        "UnitsInStock": 120,
        "DeliveryOn": new Date(1996, 9, 19),
        "Picture": "img/boysenberry.jpg"
    },
    {
        "ProductID": 7,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "UnitPrice": 30,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 7, 22),
        "Picture": "img/dried-pears.jpg"
    },
    {
        "ProductID": 8,
        "ProductName": "Northwoods Cranberry Sauce",
        "UnitPrice": 40,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 11, 1),
        "Picture": "img/cranberry-sauce.jpg"
    },
    {
        "ProductID": 9,
        "ProductName": "Mishi Kobe Niku",
        "UnitPrice": 97,
        "UnitsInStock": 29,
        "DeliveryOn": new Date(1997, 1, 21),
        "Picture": "img/kobe-niku.jpg"
    },
    {
        "ProductID": 10,
        "ProductName": "Ikura",
        "UnitPrice": 31,
        "UnitsInStock": 31,
        "DeliveryOn": new Date(1996, 8, 5),
        "Picture": "img/ikura.jpg"
    }
]);
$(function () {
    getAndLoadProducts();
});

function getAndLoadProducts() {
    let products = $("#products");
    let stockId;
    let image;
    let currentProduct;
    for (let i = 0; i < array.length; i++) {
        currentProduct = array[i];

        products.append(
            "<div class='column'>" +
            " <div class=\"flip-card\">\n" +
            "  <div class=\"flip-card-inner\">\n" +
            "   <div class=\"flip-card-front\">\n" +
            "      <img id='image"+i+"' src=" + currentProduct.Picture + " alt=\"Avatar\" style=\"width:100%;height:100%;\">" +
            "   </div>\n" +
            "   <div class=\"flip-card-back\" >\n" +
            "      <h2>Product name: " + currentProduct.ProductName + "</h2>\n" +
            "      <h3>Price: " + currentProduct.UnitPrice + " $</h3>" +
            "      <h3 id='stock"+i + "'></h3>" +
            "   </div>\n" +
            "  </div>\n" +
            " </div>" +
            "</div>"
        );
        stockId = document.getElementById("stock"+i);
        image = document.getElementById("image"+i);
        if (currentProduct.UnitsInStock > 0) {
            stockId.innerHTML= "In stock: "+ currentProduct.UnitsInStock+ " pcs"
        } else {
            stockId.innerHTML=
                "Currently out of stock. " +
                "Next delivery date: " + currentProduct.DeliveryOn.toDateString();
           image.style.filter="blur(3px)"

        }
    }
}

