import * as Library from "./library.js"

$( document ).ready(function() {
    $( 'body' ).text(`Hello, World!  1+1=${Library.sum(1,1)}`);
});