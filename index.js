import express from 'express'
import logger from 'morgan'
import userRouter from './routes/user.route.js'
import { connectDb } from './utils/db.js'
import dotenv from 'dotenv'



dotenv.config({})
console.log(process.env.database_link)
const app = express()

app.use(logger('dev'))


// testing apis
// user Apis
app.use("/api/user",userRouter)

// company api
// app.use("/api/user",userRoute)
// job api
// app.use("/api/user",userRoute)
//application api
// app.use("/api/user",userRoute)

app.listen(process.env.PORT || 3001,()=>{
    connectDb()
    console.log('server connected')
})





// http://domain:port//path?==> query string

// http://google.com:4436


// 0-65000
// localhost --> ipaddress
// frontend  --> http://localhost:5173
// backend  --> http://localhost:8000
// database --> http://localhost:27017


// google.com
// http://googleipaddress:port

// http://localhost:8000

// url 
// protocol://domain:port/path?querystring

// http://domain:port/user?name=nitin&password=13456