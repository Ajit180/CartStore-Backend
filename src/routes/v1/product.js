import express from 'express'
import { createproductcontroller, deleteProductController, getPoductAllContoller, getPoductByIdContoller, getPresignedUrl, updateProductController } from '../../controller/productController.js';
import { isAuthenticated } from '../../middleware/isAuthmiddleware.js';
import { authorizeRoles } from '../../middleware/rolemiddleware.js';

const router = express.Router();

router.post('/createproduct/:categoryId',isAuthenticated,authorizeRoles('admin'),createproductcontroller);
router.get('/getproduct/:productId',isAuthenticated,authorizeRoles('admin'),getPoductByIdContoller);
router.put('/updateproduct/:id',isAuthenticated,authorizeRoles('admin'),updateProductController);
router.delete('/deleteproduct/:id',isAuthenticated,authorizeRoles('admin'),deleteProductController);
router.get('/getall',isAuthenticated,authorizeRoles('customer'),getPoductAllContoller);
router.get('/getpre',isAuthenticated,authorizeRoles('customer'),getPresignedUrl);

export default router;