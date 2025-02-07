import { Contact } from "../MODELS/contact.model.js "

export const contactform = async (req,res)=>{

try {

const response = req.body

const newcontact= await Contact.create(response)
return res.status(200).json({message:"message send successfully",

    token:await newcontact.generatewebtoken(),
    userId:newcontact._id.toString()
})

    
} catch (error) {
    
    console.log({message:"error in contact-controller.js",error})
}





}