const express = require('express');
const router = express.Router();

let course = {

    title: '課程',
    info: [
        {course:'Super',time:'ss',lecturer:'wh'}, 
        {course:'Su',time:'ll',lecturer:'who'}, 
        {course:'Superman',time:'kk',lecturer:'whohh'}]
  } 


router.get('/', function(req, res) {
    res.render('course.ejs', course);
});
router.get('/', function(req, res) {
    res.render('courses_list.ejs',course);
});

module.exports = router;
