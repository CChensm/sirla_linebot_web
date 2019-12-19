var express = require('express');
var mongoose = require('mongoose');
var model = require('../models/data');
var Course = model.Course;
var router = express.Router();
// 首頁
router.get('/', function(req, res, next) {
    Course.find(function(err, docs) {

        res.render('course', {
            title: '課程管理',
            courses: docs
        });
    });
});

// 跳轉新增課程頁面
router.get('/add', function(req, res, next) {
    Course.find(function(err, docs) {
        res.render('add', {
            title: '新增課程',
            courses: docs
        });
    });
});

// 新增課程
router.post('/add', function(req, res, next) {
    // res.redirect('/');
    let courses = new Course({
        course: req.body.course,
        time: req.body.time,
        lecturer: req.body.lecturer
    });
    
    // console.log('======================create========================');

    courses.save((err, doc) => {
        // console.log(doc);
        res.redirect('/courses');
    });
    
});

// 根據id刪除對應課程資料
router.get('/del', function(req, res, next) {
    
    var id = req.query.id;

    if (id && id != '') {
        console.log('=====================delete id = ' + id);
        Course.findByIdAndRemove(id, function(err, docs) {

            res.redirect('/courses');
        });
    }
    
});

// 查詢對應修改記錄，並跳轉至修改頁面
router.get('/update', function(req, res, next) {
    
    var id = req.query.id;

    if (id && id != '') {
        Course.findById(id, function(err, docs) {
            // console.log('========================findById(\"' + id + '\")=======================\n' + docs);
            res.render('update', {
                title: '修改課程資訊',
                course: docs
            });
        });
    }
    
});

// 修改課程資料
router.post('/update', function(req, res, next) {
    
    let courses = {
        course: req.body.course,
        time: req.body.time,
        lecturer: req.body.lecturer
    };

    var id = req.body.id;

    if (id && id != '') {
        // console.log('=======================update id = ' + id);
        Course.findByIdAndUpdate(id, courses, function(err, docs) {
            res.redirect('/courses');
        });
    }
    
});


module.exports = router;