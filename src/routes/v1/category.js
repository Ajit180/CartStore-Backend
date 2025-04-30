import { createCategoryController, deleteCategoryController } from "../../controller/categoryController.js";
import { isAuthenticated } from "../../middleware/isAuthmiddleware.js";
import express from 'express'

const router = express.Router();

router.post('/create',isAuthenticated,createCategoryController);
router.delete('/delete/:id',isAuthenticated,deleteCategoryController);


export default router;