import { Product } from '../models/product.model.js';

export const getProduct = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteNestedItemById = async (req, res) => {
    try {
        const { id, itemId } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { $pull: { items: { _id: itemId } } },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: "Parent product not found" });
        }
        res.status(200).json({
            message: "Nested item deleted successfully",
            data: updatedProduct
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
