import express from 'express'
import { contactform } from '../controllers/contact-controller.js'

 const contactRouter = express.Router()




 contactRouter.route("/contact").post(contactform)


 export default contactRouter