import express from 'express';
import http from 'http';
import bodyParser from 'body-parser'
import admin_routes from './routes/admin.js'
import shop_routes from './routes/shop.js'




const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/admin',admin_routes)
app.use(shop_routes)

app.use('/', (req, res, next) => {
    
    res.status(404).send("<h1>page not found</h1>")
})

app.listen(port, () =>{
    console.log('listening on port '+port);
})