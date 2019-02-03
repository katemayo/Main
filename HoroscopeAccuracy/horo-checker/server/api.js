
const rp = require('request-promise')

let signName = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']

var yourSignNum = 0

function grabSignNum (userSign) {
  yourSignNum = signName.indexOf(userSign) + 1
  return rp(yourSignNum)
}

module.exports = {
  grabSignNum
}
