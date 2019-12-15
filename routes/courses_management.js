var express = require('express');
var router = express.Router();

var courses_info = {
    title: 'courses information',
    courses: [{name:'Superman',time:'ss',lecturer:'who'}, {name:'Superman',time:'ll',lecturer:'who'}, {name:'Superman',time:'kk',lecturer:'who'}]
  }
router.get('/', function(req, res) {
    res.render('courses_list.ejs',courses_info);
});

module.exports = router;