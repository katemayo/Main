// this file defines the data that is stored in mlab
const mongoose = require('mongoose')

//collecting & storing the feel good URLs
const Schema = mongoose.Schema({
  url: String //will store the urls of happy things in field called url
})

mongoose.model('Search', searchSchema)

mongoose.connect('mongodb://katemayo:mongoFish#1@ds131512.mlab.com:31512/gethappy')

const db = mongoose.connection

module.exports = db

//counter for number of moments improved :)
var counter = 0;
onclick(button, counter++)

//ultimate idea - have different ways it can make you feel besides good, users vote if it worked
//users tag links to help make others feel that kinda way
//collect info about how people are feeling, how they want to be feeling, and whether certain things work
