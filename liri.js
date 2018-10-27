var env = require("dotenv").config();
var fs = require('fs');
var moment = require('moment');
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var request =  require('request');
var proc = process.argv;
var userCommand = process.argv[2];
var userChoise = process.argv.splice(3).join(' ');
var spotify = new Spotify(keys.spotify); 


switch(userCommand){
    case 'movie-this':
        if(userChoise){
            movie(userChoise);
        }else{
            movie('Mr. Nobody');
        }
        break;
    case 'consert-this':{
        consert();
        break;
    }
    case 'spotify-this-song':
        spot();
        break;

    case 'do-what-it-says':
        doIt();
        break;
    default:
    console.log("Please use a valid command: spotify-this-song or movie-this or concert-this")
}

function movie(){
    if ( !userChoise ){
        userChoise = 'Mr Nobody';
    }

    request('http://www.omdbapi.com/?t=' + userChoise + '&apikey=6f1be632', function(err, response, body){
    console.log('***************************************');
    console.log('error:', err); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('***************************************');
    //console.log('body:', JSON.parse(body));
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Year: " + JSON.parse(body).Year);
    console.log("Rating: " + JSON.parse(body).imdbRating);
    //console.log( JSON.parse(body).Ratings[1].Source);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    });

}

function consert(){
    request("https://rest.bandsintown.com/artists/" + userChoise + "/events?app_id=codingbootcamp", function(err,response, body){
        if(!err && response.statusCode ===200){
            console.log(response.statusCode);
            console.log(JSON.parse(body));
            
            for (var i = 0; i < JSON.parse(body).length; i++){
                console.log('Band: ' + JSON.parse(body)[i].lineup[0]);
                console.log('Venue: ' + JSON.parse(body)[i].venue.name);
                console.log('City: ' + JSON.parse(body)[i].venue.city);
                console.log('Date: ' + JSON.parse(body)[i].datetime);
                console.log('__________________________________________')
                //console.log(JSON.parse(body)[i].moment(datetime).format('dddd'));
            }
            
        }
    });
}

function spot(){
    if(!userChoise){
        userChoise = 'Ace Of Base';
    }
    
    spotify.search({ type: 'track', query: userChoise, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       var songData = data.tracks.items;
        //console.log(songData);
      console.log("Artist: " + songData[0].artists[0].name); 
      console.log("Song Name: " + songData[0].name); 
      console.log("Link: " + songData[0].album.external_urls.spotify); 
      console.log("Album: " + songData[0].album.name); 

      });
}

function doIt(){
    fs.readFile('random.txt', "utf8", function(err, data){
        if(err){
            console.log("Error: " + err);
        }else{
            var dataArray = data.split(',');
            console.log(dataArray);
            userCommand = dataArray[0];
            userChoise = dataArray[1];
        }
    });
}
