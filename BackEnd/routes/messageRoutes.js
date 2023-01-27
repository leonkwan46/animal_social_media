const express = require('express')

const router = express.Router()
//import controller to define function
const {getMessage, createMessage, updateMessage, deleteMessage} = require('../controllers/messageController')

const {protect} = require('../middleware/authMiddleware')
// after reach route to this file and do it after that
// '/' because it's specified in server.js
// router.get('/', getMessage)
// router.post('/',createMessage)
// router.put('/:id',updateMessage)
// router.delete('/:id',deleteMessage)
// merge into this vvvv (same route)


router.route('/').get(protect, getMessage).post(protect,createMessage)
router.route('/:id').put(protect,updateMessage).delete(protect,deleteMessage)

module.exports = router

//in order to use req.body -> it needs middleware to carry value after value has been input
