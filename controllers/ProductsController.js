var queries = require('../dao/products/products')

var productsController = {}

// show list of products
productsController.list = (req, res) => {
        queries.findall((err, products) => {
        if (err) {
            console.log('Error:', err)
        }
        else {
            res.render('../views/product/a/a1/a1a', { products: products })
        }
    })
}

// // Show product by id
// productsController.show = (req, res) => {
//     queries.findOne(req.params.id, (err, product) => {
//         if (err) {
//             console.log('Error:', err)
//         } else {
//             res.render('../views/products/show', { product: product })
//         }
//     }) 
// }

// // Create new product
// productsController.create = (req, res) => {
//     res.render('../views/products/create')
// }

// // Save new product
// productsController.save = (req, res, err) => {
//     if(err) {
//         console.log(err)
//     } else {
//     data = [
//         req.body.name, 
//         req.body.description, 
//         req.body.price
//     ]
//     queries.save(data)
//     res.redirect('/products')
//     }  
// }

// // Edit an employee
// productsController.edit = (req, res) => {
//     queries.edit(req.params.id, (err, product) => {
//         if (err) {
//             console.log("Error:", err)
//         }
//         else {
//             res.render('../views/products/edit', { product: product })
//         }
//     })
// }

// // Update an employee
// productsController.update = (req, res) => {
//     data = [
//         req.params.id,
//         req.body.name,
//         req.body.description,
//         req.body.price
//     ]
//     queries.update(data)
//     res.redirect('/products')
// }

// // Delete an employee
// productsController.delete = (req, res) => {
//     queries.delete(req.params.id)
//     res.redirect('/products')
// }

module.exports = productsController