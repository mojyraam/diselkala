var express = require('express');
const User = require('../models/User')
var router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');


// Login Page
router.get('/login', (req, res) => {
  res.render('login')
})

// Register Page
router.get('/register', (req, res) => {
  res.render('register')
})

// Register Handle
router.post('/register', (req, res) => {
  const {name, family, username, email, password, rpassword } = req.body
  let errors = []

  // Check required fields
  if(!name ||!family || !username || !email || !password || !rpassword) {
    errors.push({ msg: 'لطفا اطلاعات تمامی فیلد ها وارد شود' })
  }

  // Check passwords match
  if(password !== rpassword) {
    errors.push({ msg: 'کلمات عبور یکسان نیستند' })
  }

  // Check pass length
  if(password.length < 6) {
    errors.push({ msg: 'کلمه عبور باید حداقل شامل 6 کاراکتر باشد' })
  }

  if(errors.length > 0) {
    res.render('register', {
      n: name,
      f: family,
      e: errors,
      u: username,
      m: email,
      p: password,
      rp: rpassword
    })
  } else {
    // Validation passed
    User.findOne({ email: email })
      .then(user => {
        if(user) {
        // User exists
        errors.push({ msg: 'ایمیل قبلا ثبت نام شده' })
          res.render('register', {
              n: name,
              f: family,
              e: errors,
              u: username,
              m: email,
              p: password,
              rp: rpassword
            })
        } else {
          const newUser = new User({
            name,
            family,
            username,
            email,
            password,
            rpassword
          }) 
        //Hash password
        bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err
          // Set password to hashed
          newUser.password = hash
          // Save new User
          newUser.save()
          .then(
            req.flash('success_msg', 'شما با موفقیت ثبت نام کردید و می توانید وارد شوید'),
            res.redirect('/')
          ).catch(err => console.log(err))
        })
      })
      }
    })
  }
})


// Login handle
router.post('/login', (req, res, next) => {
  const { email, password } = req.body
  let errors = []

  // Check required fields
  if(!email || !password) {
    errors.push({ msg: 'لطفا اطلاعات تمامی فیلد ها وارد شود' })
  }

  if(errors.length > 0) {
    res.render('login', {  
      e: errors,     
      m: email,
      p: password
    })
  } else {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
}})


// Logout handle
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', 'شما با موفقیت خارج شدید')
  res.redirect('/users/login')
})

module.exports = router;
