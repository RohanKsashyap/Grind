import mongoose, { Schema }  from "mongoose";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import { config } from "dotenv";
config()

const userSchema = new Schema ({


username:{
    type:String,
    required:true

},
password:{
    type:String,
    required:true,

},
email:{
    type:String,
    required:true,

},
contact:{
    type:Number,
    required:true

},
isAdmin:{
    type:Boolean,
    default:false
}


},{timestamps:true}) 

//jsonwebtoken setting(instance method can be accessed anywhere)

userSchema.methods.generatewebtoken = function(){

    return  jwt.sign(
    {// user payload (data)
        userId:this._id.toString(),
        email:this.email,
        isAdmin:this.isAdmin

    },
    //pass secret signature here from env file
  process.env.JWT_SIGNATURE,{
    expiresIn:'30d'
  }

)



}












userSchema.pre("save",async function (next) {
    

   const User= this


if (!User.isModified("password"))
{
    next()
}
try {

    const hash_password = await bcrypt.hash(User.password,10);
    User.password = hash_password

    
next()


} catch (error) {
    
    next(error)
    
}

    
})


//this is collection name(model name) that's inside db and which provide us interface to manipulate data.
export const User = mongoose.model('User',userSchema)