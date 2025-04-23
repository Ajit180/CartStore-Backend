import express from 'express'

import userRouter from '../v1/userRouter.js'
import productRouter from '../v1/product.js'
import categoryRouter from '../v1/category.js'

const router = express.Router();

router.use('/user',userRouter);
router.use('/createproduct',productRouter);
router.use('/createcategory',categoryRouter);

export default router;