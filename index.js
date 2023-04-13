const express = require ("express");
const bodyParser = require ("body-parser");
const sqlite3 = require ("sqlite3");
const app = express();
const getproducts = require("./products/read.js")

const PORT = 4000;
app.use(bodyParser.json());

app.get('/products',getproducts);


app.post('products',(request,response) => {
        response.json({
                status : true
        })
});
app.put ('/products/:productID',(request,response) => {
        response.json({
                status : true
        })
})
app.delete('products/products',(request,response) => {
        response.json({
                  status : true
        })
})

app.listen(PORT,() => {
        console.log(`APP is running on http://localhost: ${PORT}`)
});