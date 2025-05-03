import { createCategoryController, deleteCategoryController, getCategoryAllController, getCategoryByIdController, updateCategoryController } from "../../controller/categoryController.js";
import { isAuthenticated } from "../../middleware/isAuthmiddleware.js";
import express from 'express'

const router = express.Router();

router.post('/create',isAuthenticated,createCategoryController);
router.delete('/delete/:id',isAuthenticated,deleteCategoryController);
router.put('/update/:id',isAuthenticated,updateCategoryController);
router.get('/get/:id',isAuthenticated,getCategoryByIdController);
router.get('/getall',isAuthenticated,getCategoryAllController);


export default router;