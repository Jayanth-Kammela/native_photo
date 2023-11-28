const express = require('express');
const router = express.Router();
const { getUserProductById, createProduct, updateProduct, deleteProduct, getUserProduct } = require("../controllers/productController");
const protectRoute = require('../middleware/middleware');
const mutlter = require('../middleware/mutlter');

router.use(protectRoute)
router.post('/product/create',mutlter.single("image"), createProduct);
router.get('/user/products', getUserProduct);
router.get('/products/:id', getUserProductById);
router.delete('/product/delete/:id', deleteProduct);
router.put('/product/update/:id', updateProduct);


module.exports = router;