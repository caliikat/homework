console.log('keys has loaded');

// Twitter
var twitterKeys = {
  consumer_key: 'vfijplWvDL9uueuBbLnnWVgmX',
  consumer_secret: '55mA02nz5Je3BGMaqgVZaDAhLiMc1i84P8DRyyPHEVUIruBrFY',
  access_token_key: '931345869814804480-iDIQthH6rzyIEbw4KiDecOmqCyy952b',
  access_token_secret: '8lK07sJI9QYqM51OBuyXCAZZuZsg8PNUcPK7xMYfg0ePE',
}
// Spotify
var spotifyKeys = {
  client_ID: '468e35b59bc54041a0318f2f36a2f011',
  client_secret: '45889d50b86c44eab759bc9661134850'
}
// OMDB
var omdbKey = '40e9cece';

//When dividing your program code over multiple files, module.exports is used to publish variables and functions to the consumer of a module.
module.exports.twitterKeys = twitterKeys;
module.exports.spotifyKeys = spotifyKeys;
module.exports.omdbKey = omdbKey;