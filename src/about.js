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
// require("./lucioware.js");

function changeRaceSlide(){
    var raceIcons = $('ul.slider-buttons li');
    
    raceIcons.each( function(){
        var thisIcon = $(this);
        var slideName = thisIcon.find('img').attr('for');
        
        thisIcon.on('click', function(){
            var thisSlide = $('.slider-content .slide[name="' + slideName + '"]');
            console.log(thisSlide);
            clearAllSlides();
            if( !( thisSlide.hasClass('active') ) && !( thisIcon.hasClass('active') ) ){
                thisSlide.addClass('active');
                thisIcon.addClass('active');
            }
        });
    });
}

function clearAllSlides(){
    var raceIcons = $('ul.slider-buttons li').removeClass('active');
    var raceSlides = $('.slider-content .slide').removeClass('active');
}

$( document ).ready( function(){
    console.log("Lucioware Active");
    changeRaceSlide();
});