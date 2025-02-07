export const errorMiddlware = (err,req,res,next)=>{
const status = er.status||500
const message = err.message||"backend error in error-middleware.js"
const extraDetails = err.extraDetails||"backend error in error-middleware.js"

return res.status(status).json({message,extraDetails})

}