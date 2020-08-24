var express = require('express')
var router = express.Router()
var workbench = require('../controllers/WorkbenchController')

router.get('/main', (req, res) => { 
    res.render('../views/workbench/main');
})

router.get('/index', (req, res) => { 
    workbench.list(req, res)
})

router.get('/show/:id', (req, res) => {
    workbench.show(req, res)
})

router.get('/create', (req, res, next) => { 
    workbench.create(req, res)
})

router.post('/save', (req, res) => {
    workbench.save(req, res)
})

router.get('/edit/:id', (req, res) => {
    workbench.edit(req, res)
})

router.post('/update/:id', (req, res) => {
    workbench.update(req, res)
})

router.post('/delete/:id', (req, res) => {
    workbench.delete(req, res)
})
  
module.exports = router;
