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

const updateuser = async(req, res, next)=>{
    try {
        const user = await User.findByIdAndUpdate(
            // Syntax is Model.findByIdAndUpdate(id, update, options, callback);
            
                req.params.id,
                req.body,
                {new: true}//returns updated user
                )

                if(!user){
                    return res.status(401).json({message: "User not found"})
                   }

                   return res.status(200).json(user)
    } catch (error) {
        next (error)
        
   }


   
}
 export {userdata,updateuser};