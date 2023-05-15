import express from 'express';
import { register, login, getCustomer, deleteCustomer } from '../controllers/customer.js';

const router = express.Router();

//Create a new Customer
router.post('/register',register)
router.post('/login', login)
router.get('/', getCustomer)
router.delete('/:id', deleteCustomer)

export default router