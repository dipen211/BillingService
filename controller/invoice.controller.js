import { Invoice } from '../models/invoice.model.js';

export const getInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find({})
        res.status(200).json(invoices);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getInvoiceById = async (req, res) => {
    try {
        const { id } = req.params;
        const invoice = await Invoice.findById(id);
        res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const addInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.create(req.body)
        res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateInvoiceById = async (req, res) => {
    try {
        const { id } = req.params;
        const invoice = await Invoice.findByIdAndUpdate(id, req.body);
        if (!invoice) {
            return res.status(404).json({ message: "Invoice not found" });
        }
        const updatedInvoice = await Invoice.findById(id)
        res.status(200).json(updatedInvoice);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteInvoiceById = async (req, res) => {
    try {
        const { id } = req.params;
        const invoice = await Invoice.findByIdAndDelete(id);
        if (!invoice) {
            return res.status(404).json({ message: "Invoice not found" });
        }
        res.status(200).json({ message: "Invoice Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
