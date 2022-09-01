const express = require('express')
const app = express()
const port = 3000

const products = [
    {
        id: 1,
        name: "name",
        price: 50,
        image: "images/product-1.jpg",
        stock: 50,
    },
    {
        id: 2,
        name: "name",
        price: 50,
        image: "images/product-2.jpg",
        stock: 50,
    },
    {
        id: 3,
        name: "name",
        price: 50,
        image: "images/product-3.jpg",
        stock: 50,

    },
    {
        id: 4,
        name: "name",
        price: 50,
        image: "images/product-4.jpg",
        stock: 50,
    },
    {
        id: 5,
        name: "name",
        price: 50,
        image: "images/product-5.jpg",
        stock: 50,
    },
    {
        id: 6,
        name: "name",
        price: 50,
        image: "images/product-6.jpg",
        stock: 50,
    },
]




app.get('/api/products', (req, res) => {
  res.send(products);
});

app.use("/", express.static ("fe"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})