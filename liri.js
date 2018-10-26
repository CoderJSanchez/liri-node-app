var env = require("dotenv").config();
var fs = require('fs');
var moment = require('moment');
var keysFile = require('./keys');
var Spotify = require('node-spotify-api');
var request =  require('request');
var proc = process.argv;
var userCommand = process.argv[2];
var userChoise = process.argv.splice(3).join(' ');
//var spotify = new Spotify(Keys.spotify);

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
            }
            
        }
    });
}