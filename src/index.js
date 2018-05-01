/**
 * This file is the "entrypoint" into your application
 */
import 'bootstrap'
import $ from 'jquery'
import {getMovies, addMovies, movieDisplayer, deleteMovies} from './api.js';
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
        $("table").append(`<tr>
                                <td>${id}</td>
                                    <td>${title}</td>
                                    <td>${rating}</td>
                                    <td>
                                    <button class="editbutton" data-id="${id}">Edit</button>
                                    <button class="deletebutton">Delete</button>
                                </td>
                            </tr> `);
    });

}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});


$('#addMV').click((e) => {
    e.preventDefault();
    const title = $('#addMovie').val();
    const rating = $('#addRating').val();
    // location.reload();

    addMovies({title, rating}).then(movie => {
        const movieRow = movieDisplayer(movie.title, movie.rating, movie.id);
        $(".movieList").append(movieRow)
    });

    $('#addMovie').val('');
    $('#addRating').val(0);


});

$('.movieList').on('click', '.deletebutton', (e)=>{
    e.preventDefault();
    console.log($(e.target).parent().prev().prev().prev().html());
    $(e.target).parent().parent().remove();
    deleteMovies($(e.target).parent().prev().prev().prev().html());


});

$(".editbutton").on('click', '.editMovies', (e)=>{
    e.preventDefault();
    const number = ($(e.target).parent().prev().prev().data('id'));
    let title = $(".newtitle"+number).val();
    let rating = $(".stars"+number).val();
    post.editMovies($(e.target).data("id"), {title: title, rating: rating});
    setTimeout(function(){
        createCards();
    }, 300);
    $('.modal').css("display", "none");
    $('.modal-backdrop').css("display", "none")
});
