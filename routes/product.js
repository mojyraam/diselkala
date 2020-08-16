var express = require('express')
var router = express.Router()
var Products = require('../controllers/ProeductsController')

/* GET home page. */
router.get('/a', (req, res) => { 
    res.render('product/a')
})

router.get('/a/a1', (req, res) => { 
    res.render('product/a/a1')
})

router.get('/a/a1/a1a', (req, res) => { 
    //console.log(req.user._id)
    Products.list(req, res)
})




















router.get('/excavator/kumatsu', function(req, res, next) { 
    res.render('excavator')
})

router.get('/excavator/zoomlion', function(req, res, next) { 
    res.render('excavator')
})

router.get('/excavator/hepco', function(req, res, next) { 
    res.render('excavator')
})

router.get('/excavator/liugang', function(req, res, next) { 
    res.render('excavator')
})

router.get('/excavator/changlin', function(req, res, next) { 
    res.render('excavator')
})

router.get('/excavator/xcmg', function(req, res, next) { 
    res.render('excavator')
})

router.get('/excavator/delta', function(req, res, next) { 
    res.render('excavator')
})

router.get('/excavator/foton', function(req, res, next) { 
    res.render('excavator')
})

router.get('/excavator/helico', function(req, res, next) { 
    res.render('excavator')
})

router.get('/excavator/lg', function(req, res, next) { 
    res.render('excavator')
})

router.get('/excavator/sunward', function(req, res, next) { 
    res.render('excavator')
})

router.get('/excavator/tirazhemachine', function(req, res, next) { 
    res.render('excavator')
})

router.get('/loader', function(req, res, next) { 
    res.render('laoder')
})

router.get('/graider', function(req, res, next) { 
    res.render('graider')
})

router.get('/rollers', function(req, res, next) { 
    res.render('rollers')
})

router.get('/dumptruck', function(req, res, next) { 
    res.render('dumptruck')
})

router.get('/billbecko', function(req, res, next) { 
    res.render('billbecko')
})

module.exports = router;