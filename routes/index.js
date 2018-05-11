var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'GG - Home',
    activeIndex: 'active'
  });
});

/* GET latest vid page */
router.get('/latest', function (req, res, next) {
  res.render('latest', {
    title: 'GG - Latest Video',
    activeLatest: 'active'
  });
});

/* GET team page */
router.get('/team', function (req, res, next) {
  res.render('team', {
    title: 'GG - The Team',
    activeTeam: 'active'
  });
});

module.exports = router;
