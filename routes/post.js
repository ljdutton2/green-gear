const express = require('express')
const router = express.Router();

const User = require('../models/user')
const Post = require('../models/post')

/** Route to get all posts. */
router.get('/', (req, res) => {
    Post.find().then((post) => {
        return res.json({post})
    })
    .catch((err) => {
        throw err.post
    });
})

    

/** Route to get one post by id. */
router.get('/:postId', (req, res) => {
    post.findOne({_id: req.params.postId})
    .then(result => {
        res.json(result)
    }).catch(err => {
        throw err.post
    })

    
})

/** Route to add a new post. */
router.post('/', (req, res) => {
    let post = new post(req.body)
    post.save()
    .then(post => {
        return User.findById(post.author)
    })
    .then(user => {
        // console.log(user)
        user.posts.unshift(post)
        return user.save()
    })
    .then(() => {
        return res.send(post)
    }).catch(err => {
        throw err.post
    })
})

/** Route to update an existing post. */
router.put('/:postId', (req, res) => {
    post.findByIdAndUpdate(req.params.postId, req.body).then(() => {
        return User.findOne({_id: req.params.postId})
    }).then((user) => {
        return res.json({post})
    }).catch((err) => {
        throw err.post
    })
    
})

/** Route to delete a post. */
router.delete('/:postId', (req, res) => {
    User.findByIdAndDelete(req.params.postId).then((result) => {
        if (result === null) {
            return res.json({post: 'post does not exist.'})
        }
        return res.json({
            'post': 'Successfully deleted.',
            '_id': req.params.postId
        })
    })
    .catch((err) => {
        throw err.post
    })

    
})

module.exports = router