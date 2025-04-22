import userRepository from "../repository/userRepository.js";

export const registerUser = async(userData)=>{
  try {

    const newUser = userRepository.create(userData);
    return newUser;
    
  } catch (error) {
     throw new Error('User registration falied',error.message);
  }
}