var queries = require('../dao/rahsazimadani')

var rahsaziController = {}

// show list of products
rahsaziController.list = (req, res) => {
    queries.findAll((err, products) => {
        if (err) {
            console.log('Error:', err)
        }
        else {
            res.render('../views/rahsazimadani/excavator/hundai/index', { products: products })
        }
    })
}

// Show product by id
rahsaziController.show = (req, res) => {
    queries.findOne(req.params.id, (err, product) => {
        if (err) {
            console.log('Error:', err)
        } else {
            res.render('../views/rahsazimadani/excavator/hundai/show', { product: product })
        }
    }) 
}

// Create new product
rahsaziController.create = (req, res) => {
    res.render('../views/rahsazimadani/excavator/hundai/create', {
        branch: [
            {
                code: 'a1a',
                name: 'راهسازی-بیل مکانیکی-کوماتسو'
            },
            {
                code: 'a1b',
                name: 'راهسازی-بیل مکانیکی-هیوندای'
            }
        ]
    })
}

// Save new product
rahsaziController.save = (req, res, err) => {
    if(err) {
        console.log(err)
    } else {
    data = [
        req.body.name, 
        req.body.price, 
        req.body.branch,
        req.body.description,
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
        req.body.washercartel,
        req.body.asbakdudohava
    ]
    queries.save(data)
    res.redirect('/rahsazimadani/excavator/hundai')
    }  
}

// Edit an employee
rahsaziController.edit = (req, res) => {
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
rahsaziController.update = (req, res) => {
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
rahsaziController.delete = (req, res) => {
    queries.delete(req.params.id)
    res.redirect('/products')
}

module.exports = rahsaziController