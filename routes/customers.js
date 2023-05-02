import express from 'express';
import { register, login } from '../controllers/customer.js';

const router = express.Router();

//Create a new Customer
router.post('/',register)
router.post('/login', login)

export default router