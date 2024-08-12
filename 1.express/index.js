import express from 'express';
import http from 'http';
import bodyParser from 'body-parser'

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/add-product',(req, res, next) => {
    console.log("adding the prodcuts")
    res.send('<form method = "POST" action="/products"><input type="text" name="product"><button type = "submit">add the products</button></form>')
})

app.use('/products',(req, res, next) => {
    console.log(req.body)
    console.log(req.body.product)
    
})

app.get('/', (req, res) => {
    res.send("<h1>hello from the express server but from the root</h1>");
})
app.listen(port, () =>{
    console.log('listening on port '+port);
})