import { Cart } from '../models/cart.model.js';

export const getCartItems = async (req, res) => {
    try {
        const products = await Cart.find({})
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const addItemToCart = async (req, res) => {
    try {
        const product = await Cart.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteItemFromCart = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Cart.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteAllFromCart = async (req, res) => {
    try {
        const product = await Cart.deleteMany();
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
