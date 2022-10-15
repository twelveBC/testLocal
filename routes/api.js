var express = require('express');
var router = express.Router();
const passport = require('../lib/passport')
const apiController = require('../controllers/apiControllers')
const restrict = require('../middlewares/restrict')

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'API' });
// });

router.get('/', restrict, (req,res) => res.render('index',{ title: 'exrpress' }))

router.get('/register', apiController.getTitle)
router.post('/register', apiController.regis)

router.get('/login', apiController.getTitleLogin)
router.post('/login', passport.authenticate('local',{
  successRedirect: '/',
  failureRedirect: '/api/login',
  failureFlash: true
}))

router.get('/whoami', restrict, apiController.whoami)

module.exports = router;
