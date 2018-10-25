var env = require("dotenv").config();
var fs = require('fs');
var moment = require('moment');
var keysFile = require('./keys');
var spot = require('node-spotify-api');
var request =  require('request');
var proc = process.argv;
var userCommand = process.argv[2];
var userChoise = process.argv[3];
//var spotify = new Spotify(keys.spotify);

switch(userCommand){
    case 'movie-this':
        if(userChoise){
            movie(userChoise);
        }else{
            movie('Mr. Nobody');
        }
        break;
    case 'consert-this':
        consert();
        break;
    case 'spotify-this-song':
        spot();
        break;
    case 'do-what-it-says':
        doIt();
        break;
}
function movie(){

    request('http://www.omdbapi.com/?t=' + userChoise + '&apikey=6f1be632', function(err, response, body){
    console.log('error:', err); 
    console.log('statusCode:', response && response.statusCode); 
    //console.log('body:', JSON.parse(body));
    console.log( JSON.parse(body).Title);
    console.log( JSON.parse(body).Year);
    console.log( JSON.parse(body).imdbRating);
    //console.log( JSON.parse(body).Ratings[1].Source);
    console.log( JSON.parse(body).Country);
    console.log( JSON.parse(body).Language);
    console.log( JSON.parse(body).Plot);
    console.log( JSON.parse(body).Actors);
    });

}