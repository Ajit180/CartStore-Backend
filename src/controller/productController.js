import { StatusCodes } from "http-status-codes";
import { createproduct } from "../service/productRepository.js";
import { internalErrorResponse, successResponse } from "../utils/Common/CommonResponse.js";

export const createproductcontroller = async(req,res)=>{
   try {
    
    const categoryId = req.params.categoryId;
    const productdata={...req.body,categoryId:categoryId}
    const product = await createproduct(productdata);
    return res.status(StatusCodes.CREATED).json(successResponse(product));
    
   } catch (error) {
    console.log('Create product error:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(internalErrorResponse(error));
   }
}