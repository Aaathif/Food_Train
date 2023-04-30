import Contact from "../models/Contact.js"

//Create Contact
export const createContact = async (req, res, next) => {
    const newContact = new Contact(req.body)

    try {
        const savedContact = await newContact.save()
        res.status(200).json(savedContact)
    } catch (err) {
        next(err)
    }
}

//Update Contact
export const updateContact = async (req, res, next) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new:true}
        )
        res.status(200).json(updatedContact)
    } catch (err) {
        next(err)
    }
}

//Delete Contact
export const deleteContact = async (req, res, next) => {
    try {
        await Contact.findByIdAndDelete(
            req.params.id, 
        )
        res.status(200).json("Payroll has been delete")
    } catch (err) {
        next(err)
    }
}

//GET Contact with ID
export const getContact = async (req, res, next) => { 
    try {
        const Cont = await Contact.findById(
            req.params.id, 
        )
        res.status(200).json(Cont)
    } catch (err) {
        next(err)
    }
}

//GET All Contacts
export const getContacts = async (req, res, next) => { 
    try {
        const Contacts = await Contact.find()
        res.status(200).json(Contacts)
    } catch (err) {
        next(err)
    }
}


// export const countByType = async (req, res, next) => {
//     const types = req.query.types.split(",");
//     try {
//       const list = await Promise.all(
//         types.map((type) => {
//           return Product.countDocuments({ type: type });
//         })
//       );
//       res.status(200).json(list);
//     } catch (err) {
//       next(err);
//     }
//   };
  
  
//   export const countByCategory = async (req, res, next) => {
//       try {
//         const breadCount = await Product.countDocuments({ category: "bread" });
//         const beverageCount = await Product.countDocuments({ category: "beverage" });
//         const candyCount = await Product.countDocuments({ category: "candy" });
    
//         res.status(200).json([
//           { category: "bread", count: breadCount },
//           { category: "beverage", count: beverageCount },
//           { category: "candy", count: candyCount },
//         ]);
//       } catch (err) {
//         next(err);
//       }
//     };