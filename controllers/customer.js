import Customer from '../models/Customer.js';
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    const { username, email, password, firstName, lastName, contactNo, address, dateOfBirth } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);

    try{
        const customerExists = await Customer.findOne({ email });

        if(customerExists){
            res.status(400).send({ message : "User Already Exists"});
        }

        //create a new customer
        const customer = new Customer({
            username,
            email,
            password: encryptedPassword,
            firstName,
            lastName,
            contactNo,
            address,
            dateOfBirth
        });

        customer
            .save()
            .then(() => {
                res.status(201).send('User Registered Succussfully');
            })

    } catch (err) {
        console.error(err);
        res.status(500).send('Error registering user')
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try{
        //Find customer by email
        const customer = await Customer.findOne({ email })
        if(!customer){
            return res.status(400).json({ message: 'Invalid Credentials'});
        }

        //verify password
        const isMatch = await bcrypt.compare(password, customer.password)

        if(!isMatch){
            return res.status(400).json({ message: 'Invalid Credentials'})
        }
        res.status(200).json({ message: 'Login Successful asiff'})

    }catch (err){
        console.error(err);
        res.status(500).json({ message: 'Server Error'})
    }
}


export const getCustomer = async (req, res, next) => {
    try {
        const contacts = await Customer.find()
        res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}

export const deleteCustomer = async (req, res, next) => {
    try {
        await Customer.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json("Contact has been deleted")
    } catch (error) {
        next(error)
    }
}
