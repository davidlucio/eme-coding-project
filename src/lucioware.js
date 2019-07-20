/*****
    My own JS, because for some reason putting it into about.js 
    just made everything choke. (And I don't exactly have the 
    time to learn all of Node during a testing exercise.)
*****/

    // Just For Fun
    // $(window).jKonamicode(function(){
    //     alert("No Cheating!");
    // });


var callCount = 1;

function luciowareLoaded(){
    console.log("Lucioware Loaded. Count: " + callCount);
    callCount++;
    return;
}

$( document ).ready( function(){
    console.log("Lucioware Active");
});