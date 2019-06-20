const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
  });
  
// Add Post

// Delete Post
async function loadPostsCollection() {
    const connectionString = 'mongodb://abc_123:abc_123@ds049641.mlab.com:49641/vue_express';
  
    const client = await mongodb.MongoClient.connect(
      'mongodb://abc_123:abc_123@ds049641.mlab.com:49641/vue_express',
      {
        useNewUrlParser: false
      }
    );
  
    return client.db('vue_express').collection('posts');
  }


module.exports = router;