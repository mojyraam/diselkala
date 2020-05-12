var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) { 
    res.render('rahsazimadani/rahsazimadani')
})

router.get('/excavator', function(req, res, next) { 
    res.render('rahsazimadani/excavator/excavator')
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
