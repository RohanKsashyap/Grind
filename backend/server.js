import express from 'express';
import userroutes from './router/express-router.js'
import dbconnect from './utils/db.js';
import { errorMiddlware } from './Middleware/error-middllware.js';
import contactRouter from './router/contact-router.js';
import cors from 'cors'
const app = express();


//handling cors here

const corsOption = {
// defining origin,and methods
    origin:"http://localhost:5173",
    method:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true
}

app.use(cors(corsOption))

app.use(express.json())// to get body input in json form



const port = 3000


// app.get('/home',(req,res)=>{

//     res.status(200).send('server running');
// })


app.use('/api/auth',userroutes) // using middlewares (always with .use)
app.use('/api/form',contactRouter) // using middlewares (always with .use)

app.use(errorMiddlware)

dbconnect().then(()=>{



app.listen(port,console.log(`server is running on port ${port}`))

}).catch((error)=>{
    console.log('database not connected in server .js',error)
})