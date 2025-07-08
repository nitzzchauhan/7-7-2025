import mongoose from 'mongoose'

export const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2/em_job_portal")
        console.log("database connected")
    }
    catch (error) {
        console.log(error.message)
    }

}