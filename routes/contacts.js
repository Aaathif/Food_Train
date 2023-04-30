import express from 'express'
import { createError } from '../utils/error.js';
import { verifyAdmin } from '../utils/verifyToken.js';
import { createContact, deleteContact, getContact, getContacts, updateContact } from '../controllers/contact.js';
// import { login, register } from '../controllers/auth.js'


const router = express.Router();

//CREACT
router.post("/", createContact)


//UPDATE
router.put("/:id", updateContact)

//DELETE
router.delete("/:id", deleteContact)

//GET
router.get("/find/:id", getContact)


//GET ALL
router.get("/", getContacts)


// router.get("/countByType", countByType)
// router.get("/countByCategory", countByCategory)

export default router