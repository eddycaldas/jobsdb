const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT ||8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

const routes = {
    employee: require('./routes/employee')
}

app.use('/employee', routes.employee)

app.listen(PORT, () => console.log(`listening ${PORT}`))