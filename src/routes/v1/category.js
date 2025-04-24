import { createCategoryController } from "../../controller/categoryController.js";
import { isAuthenticated } from "../../middleware/isAuthmiddleware.js";
import express from 'express'

const router = express.Router();

router.post('/',isAuthenticated,createCategoryController);


export default router;