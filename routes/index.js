const express = require('express')
const postRoutes = require('./post.js')
const userRoutes = require('./user.js')

const router = express.Router()

router.use('/posts', postRoutes)
router.use('/users', userRoutes)

module.exports = router