import express from 'express';
import { addItemToCart, deleteAllFromCart, deleteItemFromCart, getCartItems } from '../controller/cart.controller.js';

const cartRouter = express.Router()

cartRouter.post('/', addItemToCart)

cartRouter.get('/', getCartItems)

cartRouter.delete('/:id', deleteItemFromCart)

cartRouter.delete('/', deleteAllFromCart)

export default cartRouter;