const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const cvRouter = express.Router()

cvRouter.use(bodyParser.json())
const User = require('../src/model/user.js');


mongoose.connect('mongodb://read:read@ds159254.mlab.com:59254/refugee')
mongoose.Promise = require('bluebird')
cvRouter.route('/:userId')
.get(async (req, res) => {
	const userId = req.params.userId
	console.log('USER ID: ', userId)
	// Get user object from MongoDb
	const user = await User.findOne({id:userId})

    // render cv using template
    res.render('cv.hbs', user)
})

module.exports = cvRouter;
