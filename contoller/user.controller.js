import { User } from "../model/user.model.js"


export const register = async (req, res) => {
    // console.log("object")
    try {
        const { fullName, email, phoneNumber, password, role } = req.body
       
        if (!fullName || !email || !phoneNumber || !password || !role) {
            return res.status(400).json(
                {
                    "message": "All fields are required",
                    "success": false
                }
            )
        }
        // const file = req.file
        // cloudinary 

        const user = await User.findOne({email})
        if (user){
            return res.status(400).json(
                {
                    "message": "User Already Exist with this email",
                    "success": false
                }
            )
        }

        await User.create({
            fullName,
            email,
            phoneNumber,
            password:password,
            role,
            profile:{
                profilePhoto:""
            }
        })
        return res.status(201).json(
                {
                    "message": "User has been registered successfully",
                    "success": true
                }
            )





        
       
    }
    catch (error) {
        console.log(error.message)
    }
}
export const login = async (req, res) => {
    return res.send("hello from login")
}
export const logout = async (req, res) => {
    console.log(res)
    return res.send("hello from the log")
}
export const updateProfile = async (req, res) => {
    return res.send("hello from update profile")
}

// three way sby which you will receive your data from frontend

// req.body --> from form
// req.params --> url parameter
// req.query --> www.google.com/q?search=njkvndfkjgndfkjgkjdfnkgdf