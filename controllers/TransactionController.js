var queries = require('../dao/products/transaction')
var productQuery = require('../dao/rahsazimadani')

var transactionController = {}

// show list of products
transactionController.list = (req, res) => {
        queries.findAll(req.user.email, (err, transactions) => {
        if (err) {
            console.log('Error:', err)
        } else {
            res.render('../views/transaction/index', { transactions: transactions})
        }
    })
}

transactionController.listAdmin = (req, res) => {
    queries.findAllAdmin((err, transactions) => {
        if (err) {
            console.log(err)
        } else {
            res.render('../views/transaction/adminindex', { transactions: transactions })
        }
    })
}

// Show product by id
transactionController.show = (req, res) => {
    queries.findOne(req.params.id, (err, transactions) => {
        if (err) {
            console.log('Error:', err)
        } else {
            res.render('../views/transaction/adminshow', { transactions: transactions })
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
            if (req.user) {
                console.log(req.user)
                res.render('../views/transaction/create', { product: product, user: req.user })
            } else {
                res.render('../views/transaction/create', { product: product })
            }
        }
    })
}

// Save new product
transactionController.save = (req, res, err) => {
    if(err) {
        console.log("Error:", err)
    } else {
        data = [
            req.body.name,
            req.body.totalprice,
            req.body.blocksilandr,
            req.body.silandr,
            req.body.sarsilandr,
            req.body.millang,
            req.body.milsupap,
            req.body.bush,
            req.body.ring,
            req.body.yataghan,
            req.body.supap,
            req.body.seat,
            req.body.gate,
            req.body.waterpomp,
            req.body.oilpomp,
            req.body.washerkamel,
            req.body.washersarsilandr,
            req.body.washerkartel,
            req.body.asbakdudohava,
            req.body.productcode,
            req.body.description,
            req.body.username,
            req.body.address,
            req.body.fname,
            req.body.family,
            req.body.email,
            req.body.phone,
            req.body.random,
            req.body.time
        ]
    queries.save(data)
    res.redirect('/transaction/index')
    }  
}

// Edit an employee
transactionController.edit = (req, res) => {
    queries.edit(req.params.id, (err, transactions) => {
        if (err) {
            console.log("Error:", err)
        }
        else {
            res.render('../views/transaction/adminedit', { transactions: transactions })
        }
    })
}

// Update an employee
transactionController.update = (req, res) => {
    data = [
        req.params.id,
        req.body.address,
        req.body.totalprice,
        req.body.paymenttype
    ]
    queries.update(data)
    res.redirect('/transaction/adminindex')
}

// Delete an employee
// transactionController.delete = (req, res) => {
//     queries.delete(req.params.id)
//     res.redirect('/products')
// }

module.exports = transactionController