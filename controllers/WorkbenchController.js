var queries = require('../dao/rahsazimadani')

var workbenchController = {}

// show list of products
workbenchController.list = (req, res) => {
    queries.findAll((err, products) => {
        if (err) {
            console.log('Error:', err)
        }
        else {
            res.render('../views/workbench/index', { products: products })
        }
    })
}

// Show product by id
workbenchController.show = (req, res) => {
    queries.findOne(req.params.id, (err, product) => {
        if (err) {
            console.log('Error:', err)
        } else {
            res.render('../views/workbench/show', { product: product })
        }
    }) 
}

// Create new product
workbenchController.create = (req, res) => {
    res.render('../views/workbench/create', {
        branch: [
            {
                code: 'a1a',
                name: 'راهسازی-بیل مکانیکی-هیوندای'
            },
            {
                code: 'a1b',
                name: 'راهسازی-بیل مکانیکی-کوماتسو'
            },
            {
                code: 'a1c',
                name: 'راهسازی-بیل مکانیکی-زوملاین'
            },
            {
                code: 'a1d',
                name: 'راهسازی-بیل مکانیکی-هپکو'
            },
            {
                code: 'a1e',
                name: 'راهسازی-بیل مکانیکی-لیوگانگ'
            },
            {
                code: 'a1f',
                name: 'راهسازی-بیل مکانیکی-چانگلین'
            },
            {
                code: 'a1g',
                name: 'راهسازی-بیل مکانیکی-XCMG'
            },
            {
                code: 'a1h',
                name: 'راهسازی-بیل مکانیکی-دلتا'
            },
            {
                code: 'a1i',
                name: 'راهسازی-بیل مکانیکی-فوتون'
            },
            {
                code: 'a1j',
                name: 'راهسازی-بیل مکانیکی-هلیکو'
            },
            {
                code: 'a1k',
                name: 'راهسازی-بیل مکانیکی-LG'
            },
            {
                code: 'a1l',
                name: 'راهسازی-بیل مکانیکی-سانوارد'
            },
            {
                code: 'a1m',
                name: 'راهسازی-بیل مکانیکی-تیراژه ماشین'
            }
        ]
    })
}

// Save new product
workbenchController.save = (req, res, err) => {
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
        req.body.asbakdudohava,
        req.body.productcode,
        req.body.imagea,
        req.body.imageb,
        req.body.imagec,
        req.body.imaged,
        req.body.imagee
    ]
    queries.save(data)
    res.redirect('/workbench/index')
    }  
}

// Edit a product
workbenchController.edit = (req, res) => {
    queries.edit(req.params.id, (err, product) => {
        if (err) {
            console.log("Error:", err)
        }
        else {
            res.render('../views/workbench/edit', { product: product })
        }
    })
}

// Update a product
workbenchController.update = (req, res) => {
    data = [
        req.params.id,
        req.body.name, 
        req.body.price, 
        req.body.productbranch,
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
    queries.update(data)
    res.redirect('/workbench/index')
}

// Delete a product
workbenchController.delete = (req, res) => {
    queries.delete(req.params.id)
    res.redirect('/workbench/index')
}

module.exports = workbenchController