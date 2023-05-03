import express from 'express';
import { register, login, getCustomer, deleteCustomer } from '../controllers/customer.js';

const router = express.Router();

//Create a new Customer
router.post('/',register)
router.post('/login', login)
router.get('/', getCustomer)
router.get('/:id', deleteCustomer)

export default router