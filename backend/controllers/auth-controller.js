import { User } from "../MODELS/user.model.js"
import bcrypt from 'bcrypt'
 


// export const authcontroller = async (req,res) =>{

//     try {
//     console.log(req.body)
        
//         res.status(200).send(req.body)
//     } catch (error) {
//         console.log('page not found from authcontroller ',error)
//     }
    
// }






export const register = async (req,res) =>{

    try {
         const {username,password,email,contact}= req.body

         const userExist =  await User.findOne({email})// checks same username exist or not

          if (userExist)
          {
            res.status(400).json({msg:'user already exist'})
          }

//    const hash_password = await bcrypt.hash(password,10)

    //    const usercreated =   await User.create({username,password:hash_password,email,contact})
       const usercreated =   await User.create({username,password,email,contact})

        // res.status(200).send(usercreated)
        res.status(201).json({msg:"registration successfull!!",
            token:await usercreated.generatewebtoken(),
            userId:usercreated._id.tostring})
        
    } catch (error) {
        // console.log('page not found from register controller',error)
        next(error)
    }
    
}

//user login route

export const login = async  (req,res)=>{


    try {

        const {email,password} = req.body
        const userRegistered = await User.findOne({email});
        console.log(userRegistered.password)

        if (!userRegistered){

return res.status(400).json({message:'Invalid Credentials!!'})

        }

        const user = await bcrypt.compare(password,userRegistered.password)

if(user){


    res.status(200).json(
        {
            
            message:"login successfull!!",
        token:await userRegistered.generatewebtoken(),
        userId:userRegistered._id.toString()

    
    })
        


}
else{
    res.status(400).json({message:'Invalid email or password!!'})
}

        
    }
     catch (error) {
        // res.status(404).json("error in login route(express-router.js)")
        next(error)
    }
}
