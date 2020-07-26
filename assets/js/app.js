/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.scss';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// Because ther is no ./ behind the filename wb know that he need to look into node_modules/
import $ from 'jquery'
// All modules in webpack lives in isolation, 
// if you set variable in one file, it won't be available in any other files.
import 'bootstrap';

//to point to a file relative to the the current use ./ or ../
//const getNiceMessage = require('./get_nice_message');
//import and export fct are the official way to do module loading in ECMAScript
import getNiceMessage from './components/get_nice_message';
console.log(getNiceMessage(6));

$('.dropdown-toggle').dropdown();
$('.custom-file-input').on('change', function(event) {
    var inputFile = event.currentTarget;
    $(inputFile).parent()
        .find('.custom-file-label')
        .html(inputFile.files[0].name);
});
