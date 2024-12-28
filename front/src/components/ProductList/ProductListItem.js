import React, { useState } from 'react';
import productService from '../../services/productService';

const ProductListItem = ({ product, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(product.name);
    const [editedPrice, setEditedPrice] = useState(product.price);
    const [editedQuantity, setEditedQuantity] = useState(product.quantity);
    const [orderQuantity, setOrderQuantity] = useState(1);

    const handleEdit = async () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        const editedProduct = { ...product, name: editedName, price: parseFloat(editedPrice), quantity: parseInt(editedQuantity) };
        try {
            await productService.updateProduct(product.id, editedProduct);
            setIsEditing(false);
            onEdit(); // Refresh product list
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedName(product.name);
        setEditedPrice(product.price);
        setEditedQuantity(product.quantity);
    };

    const handleOrder = async () => {
        try {
            await productService.orderProduct(product.id, orderQuantity);
            onEdit(); // Refresh product list
        } catch (error) {
            console.error('Error ordering product:', error);
        }
    };

    return (
        <li className="list-group-item">
            {isEditing ? (
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" value={editedName} onChange={e => setEditedName(e.target.value)} required />
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" value={editedPrice} onChange={e => setEditedPrice(e.target.value)} required />
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" value={editedQuantity} onChange={e => setEditedQuantity(e.target.value)} required />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-success me-2" onClick={handleSave}>Save</button>
                        <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div className="d-flex justify-content-between align-items-center">
                    <span>{product.name} - ${product.price} - Quantity: {product.quantity}</span>
                    <div>
                        <input type="number" className="form-control d-inline-block w-auto me-2" value={orderQuantity} onChange={e => setOrderQuantity(e.target.value)} min="1" max={product.quantity} />
                        <button className="btn btn-success me-2" onClick={handleOrder}>Order</button>
                        <button className="btn btn-danger me-2" onClick={onDelete}>Delete</button>
                        <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
                    </div>
                </div>
            )}
        </li>
    );
};

export default ProductListItem;