import express from 'express'
import { createproductcontroller } from '../../controller/productController.js';

const router = express.Router();

router.post('/',createproductcontroller);

export default router;