import express from 'express'
import { createproductcontroller, deleteProductController, getPoductAllContoller, getPoductByIdContoller, getPresignedUrl, updateProductController } from '../../controller/productController.js';
import { isAuthenticated } from '../../middleware/isAuthmiddleware.js';

const router = express.Router();

router.post('/createproduct/:categoryId',isAuthenticated,createproductcontroller);
router.get('/getproduct/:productId',isAuthenticated,getPoductByIdContoller);
router.put('/updateproduct/:id',isAuthenticated,updateProductController);
router.delete('/deleteproduct/:id',isAuthenticated,deleteProductController);
router.get('/getall',isAuthenticated,getPoductAllContoller);
router.get('/getpre',isAuthenticated,getPresignedUrl);

export default router;