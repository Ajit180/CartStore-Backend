import express from 'express'
import { createproductcontroller, getPoductByIdContoller } from '../../controller/productController.js';
import { isAuthenticated } from '../../middleware/isAuthmiddleware.js';

const router = express.Router();

router.post('/createproduct/:categoryId',isAuthenticated,createproductcontroller);
router.get('/getproduct/:productId',isAuthenticated,getPoductByIdContoller);

export default router;