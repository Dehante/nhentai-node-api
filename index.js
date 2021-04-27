const request = require('superagent')
const cheerio = require('cheerio')

module.exports = {

    getDoujin: require('./lib/getDoujin'),
    getLatest: require('./lib/getLatest'),
    getPopular: require('./lib/getPopular'),
    search: require('./lib/search'),
    exists: require('./lib/exists')
    
}