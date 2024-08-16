import express from 'express';
import http from 'http';
import bodyParser from 'body-parser'
import admin_routes from './routes/admin.js'
import shop_routes from './routes/shop.js'

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/admin',admin_routes)
app.use(shop_routes)

app.use('/', (req, res, next) => {
    
    res.status(404).sendFile(path.join(__dirname,'views','pagenotfound.html'))
})

app.listen(port, () =>{
    console.log('listening on port '+port);
})