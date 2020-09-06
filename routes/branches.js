var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/a', (req, res) => { 
    res.render('branches/a')
})

router.get('/a1', (req, res) => { 
    res.render('branches/a1')
})

router.get('/a2', (req, res) => { 
    res.render('branches/a2')
})

router.get('/a3', (req, res) => { 
    res.render('branches/a3')
})

router.get('/a4', (req, res) => { 
    res.render('branches/a4')
})

router.get('/a5', (req, res) => { 
    res.render('branches/a5')
})

router.get('/a6', (req, res) => { 
    res.render('branches/a6')
})

router.get('/a7', (req, res) => { 
    res.render('branches/a7')
})

router.get('/b', (req, res) => { 
    res.render('branches/b')
})

router.get('/c', (req, res) => { 
    res.render('branches/c')
})

module.exports = router;