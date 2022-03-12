const express = require('express')
const router = express.Router()
const usersPoint = require('../controllers/usersPoint')

//localhost:8000/users/sign_up
router.post('/sign_up', usersPoint.sign_up)

//localhost:8000/users/sign_in
router.post('/sign_in', usersPoint.sign_in)

//localhost:8000/users/changeProfile
router.post('/change_profile', usersPoint.changeProfile)

//localhost:8000/users/changeEmail
// router.post('/changeEmail', usersPoint.changeEmail)
   
//localhost:8000/users/changeEmail
// router.post('/changePhone', usersPoint.changePhone)

//localhost:8000/users/changeEmail
// router.post('/changePassword', usersPoint.changePassword)

//localhost:8000/users/verify_token
router.post('/verify_token', usersPoint.verifyToken)

//localhost:8000/users/deleteAccount
router.post('/delete_account', usersPoint.deleteAccount)

//localhost:8000/users/setId
// router.post('/setId', usersPoint.setId)

//localhost:8000/users/pass
// router.post('/pass', usersPoint.validatePassword)


module.exports = router 