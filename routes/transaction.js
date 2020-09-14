var express = require('express')
var router = express.Router()
var transaction = require('../controllers/TransactionController')


router.get('/index', (req, res) => { 
    transaction.list(req, res)
})

router.get('/adminindex', (req, res) => { 
    transaction.listAdmin(req, res)
})

router.get('/adminshow/:id', (req, res) => {
    transaction.show(req, res)
})

router.get('/create/:id', (req, res) => { 
    transaction.create(req, res)
})

router.post('/save', (req, res) => {
    transaction.save(req, res)
})

router.get('/adminedit/:id', (req, res) => {
    transaction.edit(req, res)
})

router.post('/adminupdate/:id', (req, res) => {
    transaction.update(req, res)
})

module.exports = router;
