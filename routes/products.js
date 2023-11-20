var express = require('express');
var router = express.Router();
const products = require("../controller/productController");

/* GET products listing. */
router.get("/", products.productsController);
router.get("/:id", products.productByIdController);
router.get("/category/:id", products.productByCatController);
router.post("/add", products.addProductController);
router.put("/update/:id",products.updatedProductController);
router.delete("/delete/:id",products.deleteProductController);


module.exports = router;
