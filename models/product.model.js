import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter the company name'],
      trim: true,
    },
    items: [
      {
        name: {
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
        image: {
          type: String,
          required: [true, 'Please enter the product name'],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model('Product', ProductSchema);

