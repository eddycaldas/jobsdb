const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT ||8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))

const routes = {
    employee: require('./routes/employee'),
    employer: require('./routes/employer')
}

app.use('/employee', routes.employee)
app.use('/employer', routes.employer)

app.listen(PORT, () => console.log(`listening ${PORT}`))