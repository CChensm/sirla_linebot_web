module.exports = function (app) {
    // app.get('/', function (req, res) {
    //   res.redirect('/posts')
    // })
    
    
    app.get('/', (req, res) => {
        res.render('index.ejs', courses_info )
    })
    // 
    app.use('/courses_management', require('./courses_management'));
    app.use('/login', require('./login'));

  }