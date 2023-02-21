'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const serverless = require('serverless-http');

const router = express.Router()

const PORT = process.env.PORT | 4000

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }))


router.get('/', (req, res, next) => {
    res.render('home', {
        pageTitle: 'Sarthak Agarwal', path: '/'
    })
})

router.get('/projects', (req, res, next) => {
    console.log("Requesting Projects");

    res.render('projects', {
        pageTitle: 'Projects', path: '/projects'
    })
})

router.get('/contact', (req, res, next) => {
    console.log('Requesting Contact Form');
    res.render('form-contact', {
        pageTitle: 'Contact Me', path: '/contact'
    })
})

router.post('/contact', (req, res, next) => {
    const person = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        subject: req.body.subject
    }

    console.log(person);
    res.render('email-success', { pageTitle: 'Sarthak Agarwal', path: '/email-success' })
})

router.use((req, res, next) => {
    res.render('404', {
        pageTitle: 'Page Not Found', path: '/404'
    })
})

app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);