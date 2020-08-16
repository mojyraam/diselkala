var queries = require('../dao/products/transaction')
var productQuery = require('../dao/rahsazimadani')
//var Product = require('../models/Product')

var transactionController = {}

// show list of products
transactionController.list = (req, res) => {
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
transactionController.show = (req, res) => {
    queries.findOne(req.params.id, (err, product) => {
        if (err) {
            console.log('Error:', err)
        } else {
            res.render('../views/products/show', { product: product })
        }
    }) 
}

// Create new product
transactionController.create = (req, res) => {
    productQuery.edit(req.params.id, (err, product) => {
        if (err) {
            console.log("Error:", err)
        }
        else {
            res.render('../views/transaction/create', { product: product })
        }
    })
}

// Save new product
transactionController.save = (req, res, err) => {
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
transactionController.edit = (req, res) => {
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
transactionController.update = (req, res) => {
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
transactionController.delete = (req, res) => {
    queries.delete(req.params.id)
    res.redirect('/products')
}

module.exports = transactionController