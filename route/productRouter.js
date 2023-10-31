import express from "express";
import {
  Allproduct,
  CreateProduct,
  SingleProduct,
  deleteProduct,
  editProduct,
  productData,
  updateProductData,
} from "../controller/productController.js";
import { productMulter } from "../utils/multer.js";

// init router
const router = express.Router();

// set EJS routers
router.get("/", Allproduct);
router.get("/Creaepage", CreateProduct);
router.get("/Singlepage/:slug", SingleProduct);
router.get("/Edit/:id", editProduct);
router.post("/Updata/:id", productMulter, updateProductData);
router.get("/delete/:id", deleteProduct);

// set api routers
router.post("/product", productMulter, productData);

// export router
export default router;
