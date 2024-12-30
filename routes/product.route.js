import express from 'express';
import { addProduct, deleteProductById, deleteNestedItemById, getProduct, getProductById, updateProduct } from '../controller/product.controller.js';

const router = express.Router()

router.post('/', addProduct)

router.get('/', getProduct)

router.get('/:id', getProductById)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProductById)

router.delete('/item/:id', deleteNestedItemById)

export default router;