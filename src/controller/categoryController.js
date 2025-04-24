import { StatusCodes } from "http-status-codes";
import {  createCategory } from "../service/categoryService.js";
import { internalErrorResponse, successResponse } from "../utils/Common/CommonResponse.js";


export const createCategoryController = async(req,res)=>{

    try {
        const create = await createCategory(req.body);

        return res.status(StatusCodes.CREATED).json(successResponse(create));
        
    } catch (error) {
        console.log('Error in creating the Category',error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(internalErrorResponse(error));
    }
}