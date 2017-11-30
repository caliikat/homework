
//listing out node libraries
var fs = require("fs");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request")


//hides protected twittwer account info
var keys = require("./keys");


//required arguments for node
var action = process.argv[2];

//required arguments
var parameter = process.argv[3];

//for log funtion
var LogJSdata = 'log.txt';

console.log(process.argv);


//////////////////////////switchcase

function switchCase() {
  // Switch case statements used from class exercise, uses statements to decalare action
  // Break causes code to jump to next set of instructions

  switch (action) {

    case 'my-tweets':
      grabTweets();                   
      break;                          

    case 'spotify-this-song':
      grabSong();
      break;

    case 'find-movie':
      grabMovie();
      break;

    case 'do-what-it-says':
      grabReadme();
      break;

      default:                            // This is used for if there is a missing ' break ' in any of the statements 
      console.log("3rd argument missing, my-tweets, spotify-this-song, movie-this or do-what-it-says");
      break;

  }
};

//////////////////////////end switchcase

////////////////twitter//////////////

function grabTweets() {
    console.log("Latest Tweets!");

    // New variable for Twitter to load keys from keys.js

    var client = new Twitter({
        consumer_key: keys.twitterKeys.consumer_key,
        consumer_secret: keys.twitterKeys.consumer_secret,
        access_token_key: keys.twitterKeys.access_token_key,
        access_token_secret: keys.twitterKeys.access_token_secret
    });

    var params = {
        screen_name: "OutfrontKat"
    };
    // Twitter parameters default tweet count of 20, but I only posted 3 tweets

    client.get("statuses/user_timeline", params, function(error, tweets, response) {
                // Calling the get method and returning the Data

                   if (!error) {
                    for (var i = 0; i < tweets.length; i++) {

                        var returnedData = ('Number: ' + (i +1) + '\n' + tweets[i].created_at + '\n' + tweets[i].text + '\n');
        console.log(returnedData);

         fs.appendFile(LogJSdata, returnedData, function(err){
          if(err)
            console.error(err);
          console.log('Tweets Appended to log!');
        });
      }
    }
  });


};

////////////////twitter//////////////

////////////////imdb//////////////
function grabMovie() {

        var findMovie;
        // Testing if search term is included with: movie-this '<movie name here>'

        if (parameter === undefined) {
          findMovie = "Dirty Dancing";
          console.log('My default movie since you did not search a movie title');
        } else {
          findMovie = parameter;
        };



        var queryUrl = "http://www.omdbapi.com/?t=" + findMovie + "&y=&plot=short&apikey=40e9cece";

        console.log(queryUrl);

        // Code used from OMDB Exercise done in class then added the extra output information
       request(queryUrl, function(err, res, body) {

      if (!err && res.statusCode === 200) {

      console.log("Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      //console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value); // tomatoRating does not work but this does?
      console.log("Country: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);

      fs.appendFile(LogJSdata, body, function(err){
          if(err)
            console.error(err);
          console.log('Movie search Appended to log!');
        });

    }
  });



};

////////////////imdb//////////////

////////////////spotify//////////////

function grabSong() {
  console.log("Trap Music!");
  // Spotify variable loading keys from keys.js
  var spotify = new Spotify({
    id: keys.spotifyKeys.client_ID,
    secret: keys.spotifyKeys.client_secret
  });
  // Same search terms like from twitter code, for use with: spotify-this-song '<song name here>'
  var searchTrack;
  if (parameter === undefined) {
    searchTrack = "Flicka Da Wrist";
  } else {
    searchTrack = parameter;
  }
  // Launching Spotify Search copied from "npmjs node-spotify-api" site
  spotify.search({
    type: 'track',
    query: searchTrack
  }, function(error, data) {
    if (error) {
      console.log('Error occurred: ' + error);
      return;
    } else {
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Song: " + data.tracks.items[0].name);
      console.log("Album: " + data.tracks.items[0].album.name);
      console.log("Preview: " + data.tracks.items[3].preview_url); // Needed to be changed to pull from 3rd spot in array

      fs.appendFile(LogJSdata, searchTrack, function(err){
          if(err)
            console.error(err);
          console.log('Spotify song search Appended to log!');
        });
    }
  });


};

////////////////spotify//////////////

////////////////random read file//////////////

function grabReadme() {
  // Code & Comments for this section used from fs.readFile exercise
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    // Break the string down by comma separation and store the contents into the output array.
     // Then split it by commas (to make it more readable)
    var output = data.split().splice(",");

    // Loop Through the newly created output array
    for (var i = 0; i < output.length; i++) {

      // Print each element (item) of the array/
      console.log(output[i]);

    }
  });
  //todo: call log function here


   
// }
//   function writeReadMeLog() {
    
//         fs.appendFile(LogArgument, grabReadme, function(err){
//           if(err)
//             console.error(err);
//           console.log('grabReadme Appended to log!');
//         });

//     }

////////////////random read file//////////////

switchCase();


