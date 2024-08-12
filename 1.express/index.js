import express from 'express';
import http from 'http';

const app = express();
const port = 3000;

app.use((req,res,next) => {
    console.log("i am the middleware ")

    next();
})

app.use((req,res,next) => {
    console.log("i am another middleware");
    res.send(<h1>hello from the middleware</h1>)
})

app.get('/', (req, res) => {
    res.send("<h1>hello from the express server</h1>");
})
app.listen(port, () =>{
    console.log('listening on port '+port);
})