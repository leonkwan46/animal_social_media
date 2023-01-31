const express = require('express')
const router = express.Router()
const authenticateToken = require('../middleware/authMiddleware')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../../FrontEnd/public/uploads');
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
      }
})

router.get('/', authenticateToken, (req, res, next) => {
    
    try {  
        const data = {
            username: req.user.username,
            name: req.user.name,
            bio: req.user.bio,
            date: req.user.date,
        }
        res.json({data});
    } catch (err) {
        next({message: "Failed sending Data"})
    }
})

router.post('/profile_pic_edit', (req, res) => {
    const upload = multer({ storage: storage }).array('event_thumbnail')
    upload(req, res, () => {
        console.log('====================================');
        console.log(req.upl);
        console.log('====================================');
    })
})

module.exports = router