import express from 'express'
import { createproductcontroller } from '../../controller/productController.js';
import { isAuthenticated } from '../../middleware/isAuthmiddleware.js';

const router = express.Router();

router.post('/:categoryId',isAuthenticated,createproductcontroller);

export default router;