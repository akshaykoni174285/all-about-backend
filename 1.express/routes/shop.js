import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
    res.send("<h1>hello from the express server but from the root</h1>");
    // res.send(`<h1>${req.body.product}</h1>`)
})


export default router;