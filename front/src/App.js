// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import ProductForm from './components/ProductForm/ProductForm';
import OrderList from './components/OrderList';

function App() {
    const [refresh, setRefresh] = useState(false);

    const handleProductAdded = () => {
        setRefresh(!refresh); // Toggle refresh state to trigger re-render
    };

    return (
        <div>
            <ProductList key={refresh} />
            <ProductForm onProductAdded={handleProductAdded} />
            <OrderList />
        </div>
    );
}

export default App;
