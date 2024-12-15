import express from 'express';
import { addInvoice, deleteInvoiceById, getInvoiceById, getInvoices, updateInvoiceById } from '../controller/invoice.controller.js';

const invoiceRoute = express.Router()

invoiceRoute.post('/', addInvoice)

invoiceRoute.get('/', getInvoices)

invoiceRoute.get('/:id', getInvoiceById)

invoiceRoute.put('/:id', updateInvoiceById)

invoiceRoute.delete('/:id', deleteInvoiceById)

export default invoiceRoute;