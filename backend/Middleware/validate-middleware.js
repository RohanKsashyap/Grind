
 export const validate = (schema)=>async(req,res,next)=>{

    try {
        
const parsebody = await schema.parseAsync(req.body)

req.body = parsebody


    } 
    catch (err) {

  const status= 500 
  const message= "fill the details properly!!"

const user_error ={
    extraDetails:err.errors[0].message,
    status:status,
    message:message
    
} 
console.log(user_error)
        // res.status(400).json({msg:user_error})

        
    }





}  