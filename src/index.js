/**
 * This file is the "entrypoint" into your application
 */
import 'bootstrap'
import $ from 'jquery'
//import '../movieStyle.css'

$(() => {
  $('[data-toggle="popover"]').popover()
})


// index.js
const data = require('../add_movie.js');

console.log(data.whichSideOfTheForce); // outputs "The Dark Side"

const message ="this message";

console.log(message);