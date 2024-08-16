import express from 'express';

import rootDir from '../util/path.js'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))// res.send(`<h1>${req.body.product}</h1>`)
})


export default router;