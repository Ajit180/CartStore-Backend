import {
  createOrderController,
  getAllOrdersController,
  getOrderByIdController,
  updateOrderController,
  deleteOrderController,
} from "../../controller/orderController.js";
import express from "express";
import { isAuthenticated } from "../../middleware/isAuthmiddleware.js";
import { getPresignedUrl } from "../../controller/productController.js";

const router = express.Router();

router.post("/createorder",isAuthenticated ,createOrderController);

// Get all orders
router.get("/getorder",isAuthenticated , getAllOrdersController);

// Get single order by ID
router.get("/getOrderbyId/:id",isAuthenticated , getOrderByIdController);

// Update an order by ID
router.put("/updateOrder/:id", isAuthenticated ,updateOrderController);

// Delete an order by ID
router.delete("/deleteOrder/:id",isAuthenticated , deleteOrderController);



export default router;
