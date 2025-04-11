const express = require("express");
const Router = express.Router()


//middel wire router
const Router = require('./Router/user')

//middel wire router for user
 app.use('/api/user', Router)

//middel wire router for user quation

app.use('/api/Quation')


//middel wire router for answer

app.use('/api/answer')


Router.get("/user/", (req, res) => {
    res.send('user')
    });
module.exports = Router;