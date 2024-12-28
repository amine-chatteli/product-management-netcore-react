import React, { useState, useEffect } from 'react';
import productService from '../services/productService';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        const data = await productService.getOrders();
        setOrders(data);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="container">
            <h2 className="my-4">Orders</h2>
            <ul className="list-group">
                {orders.map(order => (
                    <li key={order.id} className="list-group-item">
                        {order.product.name} - Quantity: {order.quantity} - Date: {new Date(order.orderDate).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;