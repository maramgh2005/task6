let products = [
    {
        name: "Laptop",
        price: 800,
        rating: 4.5
    },
    {
        name: "Mouse",
        price: 20,
        rating: 2.8
    },
    {
        name: "Keyboard",
        price: 50,
        rating: 3.5
    },
    {
        name: "Monitor",
        price: 150,
        rating: 5.0
    },
    {
        name: "Headphones",
        price: 60,
        rating: 3.0
    },
    {
        name: "USB Cable",
        price: 10,
        rating: 4.0
    }
];

products.forEach(function (product) {
    if (product.rating >= 3) {
        let star = "★".repeat(Math.floor(product.rating))
        console.log(" The rate of " + product.name + "  " + star);
    }

}

)
