import {Schema,model} from "mongoose";
import jwt from "jsonwebtoken"

const contactSchema = new Schema({

username:{type:String,requierd:true},
email:{type:String,requierd:true},
message:{type:String,requierd:true},
password:{type:String,required:true}


},{timestamps:true})
 


contactSchema.methods.generatewebtoken =function(){

    return jwt.sign(
{
 userId:this._id.toString(),
email:this.email
},
process.env.JWT_SIGNATURE_CONTACT,{
    expiresIn:"10d"
}


    )




}









//create model/collection

export const Contact = new model('Contact',contactSchema)


