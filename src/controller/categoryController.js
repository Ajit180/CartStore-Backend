import { StatusCodes } from "http-status-codes";
import {  createCategory, deletecategory } from "../service/categoryService.js";
import { internalErrorResponse, successResponse } from "../utils/Common/CommonResponse.js";
import { CategoryRepository } from "../repository/categoryRepository.js";


export const createCategoryController = async(req,res)=>{

    try {
        const create = await createCategory(req.body);

        return res.status(StatusCodes.CREATED).json(successResponse(create));
        
    } catch (error) {
        console.log('Error in creating the Category',error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(internalErrorResponse(error));
    }
}


export const deleteCategoryController = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedCategory = await deletecategory(id);
  
      if (!deletedCategory) {
        return res.status(404).json({ message: "Category not found" });
      }
  
      return res.status(200).json({
        message: "Category deleted successfully",
        category: deletedCategory,
      });
    } catch (error) {
      console.error("Error in deleting category:", error.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };