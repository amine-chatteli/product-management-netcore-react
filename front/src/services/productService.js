import axios from 'axios';

const baseURL = 'https://localhost:7202/api/Product';

const productService = {
    getAllProducts: async () => {
        const response = await axios.get(baseURL);
        return response.data;
    },
    addProduct: async (product) => {
        const response = await axios.post(baseURL, product);
        return response.data;
    },
    deleteProduct: async (id) => {
        const response = await axios.delete(`${baseURL}/${id}`);
        return response.data;
    },
    updateProduct: async (id, product) => {
        const response = await axios.put(`${baseURL}/${id}`, product);
        return response.data;
    },
    orderProduct: async (id, quantity) => {
        const response = await axios.post(`${baseURL}/${id}/order`, quantity);
        return response.data;
    },
    getOrders: async () => {
        const response = await axios.get(`${baseURL}/orders`);
        return response.data;
    }
};

export default productService;