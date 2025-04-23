import { createCategoryController } from "../../controller/categoryController.js";
import express from 'express'

const router = express.Router();

router.post('/',createCategoryController);


export default router;