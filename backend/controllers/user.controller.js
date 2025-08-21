import { User } from "../models/user.model.js";

const userdata = async (req, res,next)=> {
    //const {firstname, lastname, age, email} = req.body
    
    try{
        const listing = await User.create(req.body)
        return res.status(201).json(listing)
    }catch(error){
        next(error)
    }


}
 export default userdata;