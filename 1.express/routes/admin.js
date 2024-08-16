import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import rootDir from '../util/path.js'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router  = express.Router();

router.get('/add-product',(req, res, next) => {
    console.log("adding the prodcuts")
    res.sendFile(path.join(path.dirname(fileURLToPath(import.meta.url)),'views','add-product.html'))
})

router.post('/products',(req, res, next) => {
    console.log(req.body)
    console.log(req.body.product)
    res.redirect('/')
})


export default router