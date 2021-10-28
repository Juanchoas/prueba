import express from 'express';
import { getUsers, addUser, getUserById, editUser, deleteUser } from '../controller/user-controller.js';
import { getProducts, addProduct, getProductById, editProduct, deleteProduct } from '../controller/product-controller.js';
const router = express.Router();

router.get('/', getUsers);
router.get('/', getProducts);
router.post('/add', addUser);
router.post('/addproduct', addProduct);
router.get('/:id', getUserById);
router.get('/:id', getProductById);
router.put('/:id', editUser);
router.put('/:id', editProduct);
router.delete('/:id', deleteUser);
router.delete('/:id', deleteProduct);

export default router;
