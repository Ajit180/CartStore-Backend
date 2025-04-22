import { registerUser } from "../service/userService.js";

export const register = async (req, res) => {
    try {
      const user = await registerUser(req.body);
      res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };