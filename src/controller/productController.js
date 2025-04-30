import { StatusCodes } from "http-status-codes";
import { createproduct, deleteproduct, getproductbyId, updateproduct } from "../service/productRepository.js";
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

export const getPoductByIdContoller = async(req,res)=>{

   try {

      const productId = req.params.productId;
      const product = await getproductbyId(productId);
      if (!product) {
         return res.status(404).json({ success: false, message: "Product not found" });
       }
      return res.status(StatusCodes.ACCEPTED).json(successResponse(product))

      
   } catch (error) {
      console.log('Create product error:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(internalErrorResponse(error));
   }
}


// Update Product Controller
export const updateProductController = async (req, res) => {
  try {
    const { id } = req.params; // get id from URL params
    console.log(id);
    const updatedProduct = await updateproduct(id, req.body); // pass body data to service

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.log('Error in updateProductController:', error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Delete Product Controller
export const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params; // get id from URL params
    const deletedProduct = await deleteproduct(id);

    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.log('Error in deleteProductController:', error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};