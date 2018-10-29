

<h1>LIRI BOT</h1>
<p>LIRI is a typed language interpretation and recognition interface.  LIRI is a command line application that will take
user commands and returned data using the following commands</p>
<h3>Link to YouTube video showing how the project works</h3>
<a href = "https://youtu.be/MJLHMQSbXW8" target = "#blank">Click Here</a>
<ul>
<li>spotify-this-song</li>
<li>movie-this</li>
<li>concert-this</li>
<li>do-what-it-says</li>
</ul>

<h3>Technology Used</h3>
<ul>
<li>Node.JS</li>
<li>Node Package Manager</li>
<li>JavaScript</li>
</ul>

<h3>How to run LIRI</h3>
<ol>
  <li>node liri.js concert-this</li>
<p>This terminal command will search the Bands in Town Artist Events API and return:</p>
  <ul>
   <li>Name of the venue</li>
   <li>Venue location</li>
   <li>Date of the event</li>
  </ul>
  <li>node liri.js spotify-this-song</li>
  <p>This terminal command will call the Spotify API and return</p>
  <ul>
   <li>Artist(s)</li>
   <li>The song's name</li>
   <li>A preview link of the song from Spotify</li>
   <li>the album that the song is from</li>
  </ul>
  <li>node liri.js movie-this</li>
  <p>This terminal command will search the OMDB API for a movie title or actor's name and return:</p>
  <ul>
   <li>Title of the movie</li>
   <li>Year the movie came out</li>
   <li>IMDB Rating of the movie</li>
   <li>Rotten Tomatoes Rating</li>
   <li>Country where the movie was produced</li>
   <li>Language of the movie</li>
   <li>Plot</li>
   <li>Actors in the movie</li>
  </ul>
  <li>node liri.js do-what-it-says</li>
  <p>This terminal command will read the random.txt file and use that data to call the Spotify API</p>  
</ol>
