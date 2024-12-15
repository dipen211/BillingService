import express from 'express';
import multer from 'multer';
import { addProduct, deleteProductById, getProduct, getProductById, updateProduct } from '../controller/product.controller.js';

const router = express.Router()

router.post('/', addProduct)

router.get('/', getProduct)

router.get('/:id', getProductById)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProductById)

export default router;