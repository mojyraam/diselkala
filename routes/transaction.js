var express = require('express')
var router = express.Router()
var transaction = require('../controllers/TransactionController')


router.get('/index', (req, res) => { 
    transaction.list(req, res)
})

router.get('/show/:id', (req, res) => {
    transaction.show(req, res)
})

router.get('/create/:id', (req, res) => { 
    transaction.create(req, res)
})

router.post('/save', (req, res) => {
    transaction.save(req, res)
})

router.get('/edit/:id', (req, res) => {
    transaction.edit(req, res)
})

router.post('/update/:id', (req, res) => {
    transaction.update(req, res)
})

router.post('/delete/:id', (req, res) => {
    transaction.delete(req, res)
})
  
module.exports = router;
