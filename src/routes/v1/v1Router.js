import express from 'express'

import userRouter from '../v1/userRouter.js'
import productRouter from '../v1/product.js'
import categoryRouter from '../v1/category.js'
import OrderRouter from '../v1/order.js'

const router = express.Router();

router.use('/user',userRouter);
router.use('/createproduct',productRouter);
router.use('/createcategory',categoryRouter);
router.use('/order',OrderRouter);

export default router;