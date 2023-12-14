//express initialization
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

//connectivity to router
const userRouter = require('./Routers/userRouter');
const productRouter = require('./Routers/productRouter')
const utilRouter = require('./Routers/Utils')

//convert to json
app.use(express.json());


app.use(cors ({
    origin: ['http://localhost:5173']
}))

//Middleware
app.use('/user', userRouter);
app.use('/product', productRouter)
app.use('/util', utilRouter)

app.use(express.static('./static/uploads'));

//Routes in index js
// app.get('/',(req, res) => {
//     res.send('Server is successfully running');
// })

// app.get('/about',(req, res) => {
//     res.send('This is about page');
// })

// app.get('/contact',(req, res) => {
//     res.send('This is contact page');
// })

// for direct connectivity
// const mongoose = require('./connection');

app.listen(port, () => {
    console.log('Server running on port : 5000');
})