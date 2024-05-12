const express = require("express");

const router = express.Router();

const productcontroller= require("../controllers/product.controller");

router.post("/products", productcontroller.createProduct);

router.get("/products", productcontroller.allproducts);

router.put("/products/:id", productcontroller.updateProduct);

router.delete("/products/:id", productcontroller.deleteProduct);

router.get("/products/:id", productcontroller.singleProduct);

(module.exports) = router;