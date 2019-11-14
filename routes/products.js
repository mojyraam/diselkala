var express = require('express')
var router = express.Router()
var product = require('../controllers/ProductController.js')

// Get all products
router.get('/', (req, res) => {
  product.list(req, res)
})

// Get single employee by id
router.get('/show/:id', (req, res) => {
  product.show(req, res)
})

// Create product
router.get('/create', (req, res) => {
  product.create(req, res)
})

// Save product
router.post('/save', (req, res) => {
  product.save(req, res)
})

router.get('/edit/:id', (req, res) => {
  product.edit(req, res)
})

router.post('/update/:id', (req, res) => {
  product.update(req, res)
})

router.post('/delete/:id', (req, res) => {
  product.delete(req, res)
})

module.exports = router