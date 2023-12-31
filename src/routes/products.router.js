const express = require('express');
const router = express.Router();
const { getProducts, getProductDetails, addProduct, addToCart, updateCartQuantity, updateQuantity, viewCart, removeFromCart } = require('../controllers/product.controlle');

// Import middleware functions
const authenticateUser = require('../authenticateUser'); // Adjusted import path
const checkUserRole = require('../middlewares/checkUserRole');

// Add this line
const ProductService = require('../services/product.service');

// Route to handle product listing with pagination, filtering, and sorting
router.get('/', getProducts);

// Route to view individual product details
router.get('/:productId', getProductDetails);

// Route to add a product
router.post('/add-product', addProduct);

// Route to add a product to the cart
router.post('/add-to-cart', addToCart);

// Route to update product quantity in the cart
router.put('/update-cart/:productId', authenticateUser, updateCartQuantity);

// Alternative route to update product quantity in the cart
router.put('/update-quantity/:productId', authenticateUser, updateQuantity);

// Route to view the contents of the cart
router.get('/view-cart', authenticateUser, viewCart);

// Route to remove a product from the cart
router.delete('/:productId', authenticateUser, checkUserRole('premium'), removeFromCart);

module.exports = router;
