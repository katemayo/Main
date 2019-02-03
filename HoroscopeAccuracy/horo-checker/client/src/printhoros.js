import React, {Component} from 'react'
import rp from 'request-promise'
import cheerio from 'cheerio'


class PrintHoros extends Component {    

  render () {
    const userSign = this.props.userSign

    const $Horo = '<div class="main-horoscope">...</div>'
    const $Astro = '<div class="main-content>...</div>'
   
    let signName = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
        
    var sunHoro = ''
    var sunAstro = ''
   
    var yourSignNum = signName.indexOf(userSign)+1

    //= ===========================================================================
    // for horoscope.com
    
    const optionsHoro = {
        uri: `https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=${yourSignNum}`,
        
        transform: function ($Horo) {
          return cheerio.load($Horo)
        }
      }
      
      // console.log(optionsHoro)
      rp(optionsHoro) 
        .then(function ($Horo) {
          // console.log('I got here')
          sunHoro = $Horo('div[class=main-horoscope]').find('p').text()
          console.log('I got here')
          console.log(sunHoro)
          sunHoro = document.getElementById("horo").append(`${sunHoro}`)
          console.log('\nFrom Horoscope.com: ' + sunHoro)
          return sunHoro
        })
        .catch(function (err) {
          console.log(err)
        })
        //= ===========================================================================
        //= ===========================================================================
        // for astrology.com
        
        const optionsAstro = {
          //signName[7]
          uri: `https://www.astrology.com/horoscope/daily/${userSign}.html`,
          transform: function ($Astro) {
            return cheerio.load($Astro)
          }
        }
        rp(optionsAstro)
          .then(function ($Astro) {
            // console.log('I got here')
            sunAstro = $Astro('div[class="main-content"]').find('p').text()
            // console.log('\nFrom Astrology.com:  \n\n' + sunAstro)
            sunAstro = document.getElementById("astro").append(`${sunAstro}`)
            return sunAstro
          })
          .catch(function (err) {
            console.log(err)
          })
        //= ===========================================================================


    return (
        <div className="PrintHoros">          
        <div className="horoscope">
        <h1>{userSign}</h1>
          <h2>Your Horoscope.com horoscope for today is:</h2>
          <span id="horo"><p>{sunHoro}</p></span>
          <h2>Your Astrology.com horoscope for today is:</h2>
          <span id="astro"><p>{sunAstro}</p></span>
        </div>
      </div>
    )
  }
}

export default PrintHoros