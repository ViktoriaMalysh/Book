const express = require('express')
const router = express.Router()
const usersPoint = require('../controllers/usersPoint')

//localhost:8000/users/sign_up
router.post('/sign_up', usersPoint.sign_up)//

//localhost:8000/users/sign_in
router.post('/sign_in', usersPoint.sign_in)//

//localhost:8000/users/change_profile
router.post('/change_profile', usersPoint.changeProfile)//

//localhost:8000/users/change_email
router.post('/change_email', usersPoint.changeEmail)
   
//localhost:8000/users/change_phone
router.post('/change_phone', usersPoint.changePhone)//

//localhost:8000/users/change_password
router.post('/change_password', usersPoint.changePassword)//

//localhost:8000/users/verify_token
router.post('/verify_token', usersPoint.verifyToken)//

//localhost:8000/users/deleteAccount
router.post('/delete_account', usersPoint.deleteAccount)//

//localhost:8000/users/set_id
router.post('/set_id', usersPoint.setId)

//localhost:8000/users/validate_password
router.post('/validate_password', usersPoint.validatePassword)//

//localhost:8000/users/add_payment_card
router.post('/add_payment_card', usersPoint.addPaymentCard)

module.exports = router 