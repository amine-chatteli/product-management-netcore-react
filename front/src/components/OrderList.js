import React, { useState, useEffect } from 'react';
import productService from '../services/productService';
import './OrderList.css';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        try {
            const data = await productService.getOrders();
            setOrders(data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="container">
            <h2 className="my-4">Orders</h2>
            <ul className="list-group order-list">
                {orders.map(order => (
                    <li key={order.id} className="list-group-item d-flex justify-content-between align-items-center order-list-item">
                        <span>{order.product.name} - Quantity: {order.quantity} - Date: {new Date(order.orderDate).toLocaleString()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;