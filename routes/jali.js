var express = require('express');
var router = express.Router();
const github = "https://github.com/jpir13/mean-course/";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('My deployment GitHub repository can be found at: ' + github.link("https://github.com/jpir13/mean-course"));
});

module.exports = router;
