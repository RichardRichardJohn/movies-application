/**
 * This file is the "entrypoint" into your application
 */
import 'bootstrap'
import $ from 'jquery'
import {getMovies, addMovies, movieDisplayer} from './api.js';
// import {getMovies()} from '/src/api.js'
//import '../movieStyle.css'

// $(() => {
//   $('[data-toggle="popover"]').popover()
// })
// //



// index.js
const data = require('../add_movie.js');

console.log(data.whichSideOfTheForce); // outputs "The Dark Side"



$(document).ready(function(){
    setTimeout(function(){

    $(".loadGif").hide();
},2000);

});

// const {getMovies} = require('./api.js');
let localMovie = [];

getMovies().then((movies) => {

    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
        // localMovie = movies.map();
        console.log(`id#${id} - ${title} - rating: ${rating}`);
        $("table").append(`<tr><td>${id}</td><td>${title}</td><td>${rating}</td><td><button class="deletebutton">Delete</button><button class="editbutton" data-id="${id}">Edit</button></td></tr> `);
    });

}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});


$('#addMV').click((e) => {
    e.preventDefault();
    console.log('test');
    const title = $('#addMovie').val();
    const rating = $('#addRating').val();
    // location.reload();

    addMovies({title, rating}).then(movie => {
        const movieRow = movieDisplayer(movie.title, movie.rating, movie.id);
        $(".movieList").append(movieRow)
    });})