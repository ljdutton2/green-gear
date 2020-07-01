const express = require('express')
const router = express.Router();

const User = require('../models/user')
const Post = require('../models/post')

/** Route to get all posts. */
router.get('/', (req, res) => {
    // TODO: Get all post objects using `.find()`
    Post.find().then((post) => {
        // TODO: Return the post objects as a JSON list
        return res.json({post})
    })
    .catch((err) => {
        throw err.post
    });
})

    

/** Route to get one post by id. */
router.get('/:postId', (req, res) => {
    // TODO: Get the post object with id matching `req.params.id`
    // using `findOne`
    post.findOne({_id: req.params.postId})
    .then(result => {
        // TODO: Return the matching post object as JSON
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
    // TODO: Update the matching post using `findByIdAndUpdate`
    post.findByIdAndUpdate(req.params.postId, req.body).then(() => {
        return User.findOne({_id: req.params.postId})
    }).then((user) => {
    // TODO: Return the updated post object as JSON
        return res.json({post})
    }).catch((err) => {
        throw err.post
    })
    
})

/** Route to delete a post. */
router.delete('/:postId', (req, res) => {
    // TODO: Delete the specified post using `findByIdAndDelete`. Make sure
    // to also delete the post from the User object's `posts` array
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