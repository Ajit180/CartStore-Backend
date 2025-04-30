import express from 'express'
import { createproductcontroller, deleteProductController, getPoductByIdContoller, updateProductController } from '../../controller/productController.js';
import { isAuthenticated } from '../../middleware/isAuthmiddleware.js';

const router = express.Router();

router.post('/createproduct/:categoryId',isAuthenticated,createproductcontroller);
router.get('/getproduct/:productId',isAuthenticated,getPoductByIdContoller);
router.put('/updateproduct/:id',isAuthenticated,updateProductController);
router.delete('/deleteproduct/:id',isAuthenticated,deleteProductController);

export default router;