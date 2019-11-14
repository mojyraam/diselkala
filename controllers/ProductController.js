var queries = require('../dao/products/product')
var Product = require('../models/Product')

var productController = {}

// show list of products
productController.list = (req, res) => {
        queries.findall((err, products) => {
        if (err) {
            console.log('Error:', err)
        }
        else {
            res.render('../views/products/index', { products: products })
        }
    })
}

// Show product by id
productController.show = (req, res) => {
    queries.findOne(req.params.id, (err, product) => {
        if (err) {
            console.log('Error:', err)
        } else {
            res.render('../views/products/show', { product: product })
        }
    }) 
}

// Create new product
productController.create = (req, res) => {
    res.render('../views/products/create')
}

// Save new product
productController.save = (req, res, err) => {
    if(err) {
        console.log(err)
    } else {
    data = [
        req.body.name, 
        req.body.description, 
        req.body.price
    ]
    queries.save(data)
    res.redirect('/products')
    }  
}

// Edit an employee
productController.edit = (req, res) => {
    queries.edit(req.params.id, (err, product) => {
        if (err) {
            console.log("Error:", err)
        }
        else {
            res.render('../views/products/edit', { product: product })
        }
    })
}

// Update an employee
productController.update = (req, res) => {
    data = [
        req.params.id,
        req.body.name,
        req.body.description,
        req.body.price
    ]
    queries.update(data)
    res.redirect('/products')
}

// Delete an employee
productController.delete = (req, res) => {
    queries.delete(req.params.id)
    res.redirect('/products')
}

module.exports = productController