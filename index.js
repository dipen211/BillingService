import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoute from './routes/product.route.js';
import cartRouter from './routes/cart.route.js';
import invoiceRoute from './routes/invoice.route.js';
import http from 'http';

// Create a server object
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Write some text to the response
    res.end('Welcome to my simple Node.js app!');
})

const app = express()

// middleware
app.use(express.json())
app.use(urlencoded({ extended: false }))
app.use(cors());

// routes
app.use("/api/products", productRoute)
app.use("/api/cart", cartRouter)
app.use("/api/invoice", invoiceRoute)

mongoose.connect('mongodb+srv://dipen211:Dipen%40211@backenddb.te6jm.mongodb.net?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected!')
        app.listen(3001, () => {
            console.log('server is running on port 3001');
        });
    })
    .catch((e) => {
        console.log(e);
    })