import express from 'express';

const router  = express.Router();

router.get('/add-product',(req, res, next) => {
    console.log("adding the prodcuts")
    res.send('<form method = "POST" action="/admin/products"><input type="text" name="product"><button type = "submit">add the products</button></form>')
})

router.post('/products',(req, res, next) => {
    console.log(req.body)
    console.log(req.body.product)
    res.redirect('/')
})


export default router