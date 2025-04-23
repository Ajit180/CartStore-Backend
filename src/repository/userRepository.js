import User from "../schema/user.js";
import crudRepository from "./crudRepository.js";

const userRepository ={
    ...crudRepository(User),
    
    getbyemail:async function(email){
      const user= await User.findOne({email});
      return user;
    },

    findbyusername:async function(username){
       const user =  await User.findOne({username});  
       return user;
    },
    
    getbyToken:async function(token){
       const user= await User.findOne({verificationToken:token}); //doubt
       return user;
    }
}


export default userRepository;

