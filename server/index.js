require('dotenv').config()
const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    middleCtlr = require('./MiddlewareControllers/middleware'),
    authCtlr = require('./Controllers/authController'),
    ctrl = require('./Controllers/controller'),
    { SERVER_PORT, CONNECTION_STRING, SECERT_SESSION } = process.env,
    app = express()

app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    secret: SECERT_SESSION,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 3
    }
}))

// app.get('/api/product', middleCtlr.a, ctrl.get)
// app.post('/api/video', ctrl.put)

app.post('/auth/login', authCtlr.login)
app.post('/auth/register', authCtlr.register)
app.post('/auth/logout', authCtlr.logout)
app.get('/auth/check', authCtlr.check)

app.get('/api/students', ctrl.getStudentMajor)
app.get('/api/students/:id', middleCtlr.checkUser, ctrl.getStudent)
app.get('/api/teachers', ctrl.getTeachers)
app.get('/api/teachers/:id', middleCtlr.checkUser, ctrl.getTeacher)




massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbObj => {
    app.set('db', dbObj)
    console.log('Database connected...')
    app.listen(SERVER_PORT, () => console.log(`Server running port: ${SERVER_PORT}`))
})

