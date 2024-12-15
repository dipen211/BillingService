import mongoose from 'mongoose';

const InvoiceSchema = mongoose.Schema(
  {
    taxRate: {
      type: String,
      required: [true, 'Please enter the tax rate'],
      trim: true,
    },
    discountRate: {
      type: String,
      required: [true, 'Please enter the discount rate'],
      trim: true,
    },
    billTo: {
      type: String,
      required: [true, 'Please enter the client name'],
      trim: true,
    },
    toMobile: {
      type: String,
      required: [true, 'Please enter the client number'],
      trim: true,
    },
    items: [
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
            required: [true, 'Please enter the product image'],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Invoice = mongoose.model('Invoice', InvoiceSchema);

