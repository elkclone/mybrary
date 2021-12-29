const express = require('express')
const router = express.Router()
const Author = require('../models/author')

//create our All Authors route.
router.get('/', (req, res) => {
  res.render('authors/index')

})

//create new author route.
router.get('/new', (req, res) => {
  res.render('authors/new', {author: new Author() })

})

//Create author route.
router.post('/', (req, res) => {
  const author = new Author ({
    name: req.body.name

  })
  author.save ((err, newAuthor) => {
    if (err) {
      let locals = {errorMessage:'Error Creating Author'}
      res.render('authors/new', { 
        author : author,
        locals : locals

      })
    } else {
      //res.redirect(`authors/${newAuthor.id}`)
      res.redirect('authors')
    }
  })


})

module.exports = router
