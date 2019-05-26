// gets a random item from the happpy array
// const rp = require('request-promise') //do i need this

// function getfeelgood () {
//   const rand = Math.floor(Math.random()*feelgoodarray.length)
//   const feelgoodrand = feelgoodarray[rand];
//   return rp(feelgoodrand)
// }

// module.exports = {
//   getfeelgood
// }

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
    //<!-- the below is temporary until I can set up a pull from mongo -->
    function getfeelgood() {
      const feelgoodarray = [
        "https://www.yogajournal.com/videos/meditation-for-abundance?utm_campaign=YOG%20-%20NL%20-%20Practice%20Life%20&utm_source=hs_email&utm_medium=email&utm_content=70174949&_hsenc=p2ANqtz-9Xt4kGiIg3zFiPg13aaZuiR43E0CZBw8ahEjdTBhC-oz6qR9H07UNp0koTeaoMh5FuwOGyo-fM6eO9IL6Ytr-2IrQdzg&_hsmi=70174949",
        "https://qz.com/1556797/why-late-bloomers-are-happier-and-more-successful/",
        "https://www.youtube.com/watch?reload=9&v=pU0UFbxZDGM"
      ];
      // console.log(feelgoodarray.length)
      var rand = Math.random() * feelgoodarray.length
      // console.log(rand)
      var feelgoodrand = feelgoodarray[Math.floor(rand)];
      // console.log(feelgoodrand)
      var win = window.open(feelgoodrand, '_blank');
      win.focus();
    }

    //<!-- the above is temporary until I can set up a pull from mongo -->