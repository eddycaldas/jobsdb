const express = require('express')
const bcrypt = require('bcrypt')

const router = express.Router()

const queries = require('../db/queries')

module.exports = router;

router.get('/', (req, res) => {
  res.json({
    message: 'it works'
  })
})

function validUser(user) {
  const validEmail = typeof user.email == 'string' &&
                            user.email.trim() != ''

  const validPassword = typeof user.password == 'string' &&
                            user.password.trim() != '' &&
                            user.password.trim().length >= 6
                            
    return validEmail && validPassword
}

router.post('/signup', (req, res, next) => {
  if(validUser(req.body)) {
    queries
      .getOneByEmail(req.body.email)
      .then(user => {
        console.log('user', user)
        if(!user) {
          bcrypt.hash(req.body.password, 10)
          .then((hash) => {
            const user = {
              email: req.body.email,
              password: hash
            }
            queries
              .create(user)
              .then(id => {
                res.json({
                  id,
                  message: 'user password'
                })
              })
          })
        } else {
            next(new Error('Email in use'))
        }
      })
  } else {
    next(new Error('Invalid User'))
  }
})

router.post('/login', (req, res, next) => {
  if(validUser(req.body)) {
    queries
      .getOneByEmail(req.body.email)
      .then(user => {
        console.log(user, 'user')
        if(user) {
          bcrypt
          .compare(req.body.password, user.password)
          .then((result) => {
            if(result){
              const isSecure = req.app.get('env') != 'development'
              res.cookie('user_id', user.id, {
                httpOnly: true,
                secure: isSecure,
                signed: true
              })
              res.json({
                message: 'logged in ....'
              })
            } else {
              next(new Error('Invalid login'))
            }
          })
        } else {
          next(new Error('Invalid login'))
        }
      })
  } else {
    next(new Error('Invalid login'))
  }
})