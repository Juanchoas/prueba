import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:8080/users';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
};

const productsUrl = 'http://localhost:8080/products';

export const getProducts = async (id) => {
    id = id || '';
    return await axios.get(`${productsUrl}/${id}`);
}

export const addProduct = async (product) => {
    return await axios.post(`${productsUrl}/addProduct`, product);
}

export const deleteProduct = async (id) => {
    return await axios.delete(`${productsUrl}/${id}`);
}

export const editProduct = async (id, product) => {
    return await axios.put(`${productsUrl}/${id}`, product)
};