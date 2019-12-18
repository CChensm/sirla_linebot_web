module.exports = function (app) {
    // app.get('/', function (req, res) {
    //   res.redirect('/posts')
    // })
    
    
    app.get('/', (req, res) => {
        res.render('index.ejs')
    })

    app.use('/course', require('./course'));
    app.use('/login', require('./login'));
    app.use('/student', require('./student'));

  }