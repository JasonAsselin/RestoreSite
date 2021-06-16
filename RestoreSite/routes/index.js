'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Wooden Restoration Inc.' });
});

/* GET projects and gallery page. */
router.get('/projects', function (req, res) {
    res.render('projects', { title: 'Projects and Gallery' });
});

/* GET about us page. */
router.get('/about', function (req, res) {
    res.render('about', { title: 'About Us' });
});

/* GET contact us page. */
router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact Us' });
});

/* GET request for restore form page. */
router.get('/rrf', function (req, res) {
    res.render('rrf', { title: 'Request for Restoration Form' });
});

module.exports = router;
