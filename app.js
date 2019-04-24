const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');

const PORT = process.env.PORT ||8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))

const routes = {
    employee: require('./routes/employee'),
    employer: require('./routes/employer')
}

var auth = require('./auth')

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use('/employee', routes.employee)
app.use('/employer', routes.employer)
app.use('/auth', auth)

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: req.app.get('env') === 'development' ? err : {}
    })
  });

app.listen(PORT, () => console.log(`listening ${PORT}`))