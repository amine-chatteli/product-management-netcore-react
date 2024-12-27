// src/components/ProductForm/ProductForm.js
import React, { useState } from 'react';
import productService from '../../services/productService';

const ProductForm = ({ onProductAdded }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState(''); // Add this line

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newProduct = { name, price: parseFloat(price), quantity: parseInt(quantity) }; // Update this line
        try {
            await productService.addProduct(newProduct);
            onProductAdded(); // Trigger refresh
            setName('');
            setPrice('');
            setQuantity(''); // Add this line
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="container">
            <h2 className="my-4">Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="productName" value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">Price:</label>
                    <input type="number" className="form-control" id="productPrice" value={price} onChange={e => setPrice(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="productQuantity" className="form-label">Quantity:</label> {/* Add this block */}
                    <input type="number" className="form-control" id="productQuantity" value={quantity} onChange={e => setQuantity(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
};

export default ProductForm;