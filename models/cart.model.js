import mongoose from 'mongoose';

const CartSchema = mongoose.Schema(
    {
        companyName: {
            type: String,
            required: [true, 'Please enter the company name'],
            trim: true,
        },
        productName: {
            type: String,
            required: [true, 'Please enter the product name'],
            trim: true,
        },
        price: {
            type: Number,
            required: [true, 'Please enter the price'],
            default: 0,
            min: [0, 'Price cannot be less than zero'],
        },
        quantity: {
            type: Number,
            required: [true, 'Please enter the quantity'],
            default: 1,
        },
        image: {
            type: String,
            required: [true, 'Please enter the product name'],
        },
    },
    {
        timestamps: true,
    }
);

export const Cart = mongoose.model('Cart', CartSchema);

