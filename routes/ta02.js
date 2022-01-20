//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const newUserArray = ['Pepe', 'Lorenzo', 'Camila'];

router.post('/addUser', (req, res, next) => {
  const newUser = req.body.newUser;
  newUserArray.push(newUser);
  res.redirect('/ta02');
});

router.post('/removeUSer', (req, res, next) => {
  const removeUser = req.body.removeUser;
  const removed = newUserArray.indexOf(removeUser);
  if (removed !== -1) {
    newUserArray.splice(removed, 1);
  } else {
    return
  }
  res.redirect('/ta02');
})
router.get('/', (req, res, next) => {
  res.render('pages', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});



module.exports = router;
