import {z} from 'zod'

   export const signupSchema = z.object({

username:z.
string({
    required_error:"name is required"
}).trim().
min(3,{message:"name must be at least of 3 characters"}) 
.max(100,{message:"name should not more than 100 characters"}),


email:z.
string({
    required_error:"email is required"
}).trim().
min(10,{message:"email must be at least of 10 characters"}) 
.max(100,{message:"email should not more than 100 characters"}),


password:z.
string({
    required_error:"password is required"
}).trim().
min(8,{message:"password must be at least of 8 characters"}) 
.max(100,{message:"password should not more than 100 characters"}),




contact:z.
string({
    required_error:"number is required"
}).trim().
min(10,{message:"number must be at least of 10 characters"}) 
.max(10,{message:"number should not more than 10 characters"})



  })