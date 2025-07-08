import { allUser } from "./data/user.js"



export const register = async(req,res)=>{
    const id  = Number(req.params.id)
    // console.log(allUser[id+1])
    console.log(allUser[id-1])

    return res.send(allUser[id-1])
}
export const login = async(req,res)=>{
    return res.send("hello from login")
}
export const logout = async(req,res)=>{
    console.log(res)
    return res.send("hello from the log")   
}
export const updateProfile = async(req,res)=>{
    return res.send("hello from update profile")
}