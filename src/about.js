// Interesting. I'm assuming that node is compiling the SASS.
// But getting it to cooperate with other packages installed is tricky.
// So I'm using some external libraries, and initialize through those.

import './scss/about.scss';

import './images/background_races.jpg';
import './images/background-tac.jpg';
import './images/divider.png';
import './images/enmasse_logo.png';
import './images/enmasse-logo-main.png';
import './images/mock-up.jpg';
import './images/mock-up-thumb.jpg';
import './images/play.png';
import './images/tera-logo.png';
import './images/what_tera_poster.jpg';

import './images/races/aman.png';
import './images/races/baraka.png';
import './images/races/castanic.png';
import './images/races/elin.png';
import './images/races/high-elf.png';
import './images/races/human.png';
import './images/races/popori.png';

import './images/icons/aman-icon.png';
import './images/icons/baraka-icon.png';
import './images/icons/castanic-icon.png';
import './images/icons/elin-icon.png';
import './images/icons/high-elf-icon.png';
import './images/icons/human-icon.png';
import './images/icons/popori-icon.png';

/** Videos weren't supported by the loader. **/
// import './vid/action_thumb.mp4';
// import './vid/action_thumb.webm';





/** I don't understand why my regular JS/jQuery doesn't just work here **/
// import './resources/lucioware.js';

require("./lucioware.js");

GLOBAL.testFunction = function(){
    console.log("Maybe this will work");
    return;
};

/** 
var testVar = 0;

function testFunction(){
    console.log( "Then how come this doesn't work?\ntestVar = " + testVar );
    testVar++;
}

$( document ).ready( function(){
    console.log("This should work, right?");
    testFunction();
});
**/