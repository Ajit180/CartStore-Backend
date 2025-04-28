import express from "express";
import { createOrUpdateCartController,getCartController,addProductToCartController,removeProductFromCartController,updateCartController,deleteCartController } from "../../controller/cartController.js";
import { isAuthenticated } from "../../middleware/isAuthmiddleware.js";


const router = express.Router();

// Create or update a cart
router.post("/create",isAuthenticated, createOrUpdateCartController);

// Get cart by user ID
router.get("/", isAuthenticated, getCartController);

// Add product to cart
router.put("/add",isAuthenticated, addProductToCartController);

// Remove product from cart
router.delete("/remove/:productId", isAuthenticated, removeProductFromCartController);

// Update cart
router.put("/update",isAuthenticated, updateCartController);

// Delete cart
router.delete("/", isAuthenticated, deleteCartController);

export default router;
