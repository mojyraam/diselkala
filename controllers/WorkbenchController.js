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
                name: 'راهسازی-بیل مکانیکی-HYUNDAI'
            },
            {
                code: 'a1b',
                name: 'راهسازی-بیل مکانیکی-KUMATSU'
            },
            {
                code: 'a1c',
                name: 'راهسازی-بیل مکانیکی-ZOOMLION'
            },
            {
                code: 'a1d',
                name: 'راهسازی-بیل مکانیکی-HEPCO'
            },
            {
                code: 'a1e',
                name: 'راهسازی-بیل مکانیکی-LIUGONG'
            },
            {
                code: 'a1f',
                name: 'راهسازی-بیل مکانیکی-CHANGLIN'
            },
            {
                code: 'a1g',
                name: 'راهسازی-بیل مکانیکی-XCMG'
            },
            {
                code: 'a1h',
                name: 'راهسازی-بیل مکانیکی-DELTA'
            },
            {
                code: 'a1i',
                name: 'راهسازی-بیل مکانیکی-FOTON LOVOL'
            },
            {
                code: 'a1j',
                name: 'راهسازی-بیل مکانیکی-HELICO'
            },
            {
                code: 'a1k',
                name: 'راهسازی-بیل مکانیکی-SDLG'
            },
            {
                code: 'a1l',
                name: 'راهسازی-بیل مکانیکی-SUNWARD'
            },
            {
                code: 'a1m',
                name: 'راهسازی-بیل مکانیکی-TIRAGE MACHINE'
            },
            {
                code: 'a1n',
                name: 'راهسازی-بیل مکانیکی-JONYANG'
            },
            {
                code: 'a1o',
                name: 'راهسازی-بیل مکانیکی-RHINO'
            },
            {
                code: 'a1p',
                name: 'راهسازی-بیل مکانیکی-POWER PLUS'
            },
            {
                code: 'a2a',
                name: 'راهسازی-لودر-HYUNDAI'
            },
            {
                code: 'a2b',
                name: 'راهسازی-لودر-DELTA'
            },
            {
                code: 'a2c',
                name: 'راهسازی-لودر-HEPCO'
            },
            {
                code: 'a2d',
                name: 'راهسازی-لودر-HELICO'
            },
            {
                code: 'a2e',
                name: 'راهسازی-لودر-NEW HOLLAND'
            },
            {
                code: 'a2f',
                name: 'راهسازی-لودر-XCMG'
            },
            {
                code: 'a2g',
                name: 'راهسازی-لودر-KOMATSU'
            },
            {
                code: 'a2h',
                name: 'راهسازی-لودر-CHANGLIN'
            },
            {
                code: 'a2i',
                name: 'راهسازی-لودر-DOOSAN'
            },
            {
                code: 'a2j',
                name: 'راهسازی-لودر-SDLG'
            },
            {
                code: 'a2k',
                name: 'راهسازی-لودر-LIUGONG'
            },
            {
                code: 'a3a',
                name: 'راهسازی-بلدوزر-SHANTUI'
            },
            {
                code: 'a3b',
                name: 'راهسازی-بلدوزر-KOMATSU'
            },
            {
                code: 'a3c',
                name: 'راهسازی-بلدوزر-NEW HOLLAND'
            },
            {
                code: 'a3d',
                name: 'راهسازی-بلدوزر-TIRAGE MACHINE'
            },
            {
                code: 'a3e',
                name: 'راهسازی-بلدوزر-CHANGLINE'
            },
            {
                code: 'a3f',
                name: 'راهسازی-بلدوزر-CASE CRAWLE TRACTOR'
            },
            {
                code: 'a3g',
                name: 'راهسازی-بلدوزر-CHETRA DOZER'
            },
            {
                code: 'a3h',
                name: 'راهسازی-بلدوزر-POWER PLUS'
            },
            {
                code: 'a3i',
                name: 'راهسازی-بلدوزر-ZOOMLION'
            },
            {
                code: 'a3j',
                name: 'راهسازی-بلدوزر-LIUGONG'
            },
            {
                code: 'a3k',
                name: 'راهسازی-بلدوزر-HBXG'
            },
            {
                code: 'a3l',
                name: 'راهسازی-بلدوزر-RHINO'
            },
            {
                code: 'a3m',
                name: 'راهسازی-بلدوزر-ACE'
            },
            {
                code: 'a4a',
                name: 'راهسازی-گریدر-KOMATSU'
            },
            {
                code: 'a4b',
                name: 'راهسازی-گریدر-NEW HOLLAND'
            },
            {
                code: 'a4c',
                name: 'راهسازی-گریدر-CHANGLINE'
            },
            {
                code: 'a4d',
                name: 'راهسازی-گریدر-TIRAGE MACHINE'
            },
            {
                code: 'a4e',
                name: 'راهسازی-گریدر-XCMG'
            },
            {
                code: 'a4f',
                name: 'راهسازی-گریدر-SHANTUI'
            },
            {
                code: 'a4g',
                name: 'راهسازی-گریدر-SANY'
            },
            {
                code: 'a4h',
                name: 'راهسازی-گریدر-LIUGONG'
            },
            {
                code: 'a4i',
                name: 'راهسازی-گریدر-POWER PLUS'
            },
            {
                code: 'a4j',
                name: 'راهسازی-گریدر-RHINO'
            },
            {
                code: 'a4k',
                name: 'راهسازی-گریدر-ACE'
            },
            {
                code: 'a5a',
                name: 'راهسازی-غلطک-DELTA'
            },
            {
                code: 'a5b',
                name: 'راهسازی-غلطک-HELICO'
            },
            {
                code: 'a5c',
                name: 'راهسازی-غلطک-TIRAGE MACHINE'
            },
            {
                code: 'a5d',
                name: 'راهسازی-غلطک-CHANGLINE'
            },
            {
                code: 'a6a',
                name: 'راهسازی-دامپتراک-NHL TEREX'
            },
            {
                code: 'a6b',
                name: 'راهسازی-دامپتراک-KOMATSU'
            },
            {
                code: 'a6c',
                name: 'راهسازی-دامپتراک-BELAZ'
            },
            {
                code: 'a6d',
                name: 'راهسازی-دامپتراک-SANY'
            },
            {
                code: 'a7a',
                name: 'راهسازی-بیل بکهو-CHANGLINE'
            },
            {
                code: 'b1',
                name: 'حمل و نقل-شرکت سایپا دیزل'
            },
            {
                code: 'b2',
                name: 'حمل و نقل-شرکت بهمن دیزل'
            },
            {
                code: 'b3',
                name: 'حمل و نقل-کاریزان خودرو'
            },
            {
                code: 'b4',
                name: 'حمل و نقل-BMC'
            },
            {
                code: 'b5',
                name: 'حمل و نقل-INTERNATIONAL'
            },
            {
                code: 'c1',
                name: 'دیزل ژنراتور-stamford'
            },
            {
                code: 'd',
                name: 'کمپرسور'
            },
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
        req.body.washerkartel,
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
        req.body.washerkartel,
        req.body.asbakdudohava,
        req.body.productcode,
        req.body.imagea,
        req.body.imageb,
        req.body.imagec,
        req.body.imaged,
        req.body.imagee
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