// Interesting. I'm assuming that node is compiling the SASS.
// But getting it to cooperate with other packages installed is tricky.
// So I'm using some external libraries and manual inclusions.

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

(function ( $ ) {
	"use strict";
    
	$.fn.konami = function( options ) {
		var opts, controllerCode;
		opts = $.extend({}, $.fn.konami.defaults, options);
		controllerCode = [];
        
		// Note that we use the passed-in options, not the resolved options.
		opts.eventProperties = $.extend({}, options,  opts.eventProperties);
		this.keyup(function( evt ) {
			var code = evt.keyCode || evt.which;
			if ( opts.code.length > controllerCode.push( code ) ) {
				return;
			}
			if ( opts.code.length < controllerCode.length ) {
				controllerCode.shift();
			}
			if ( opts.code.toString() !== controllerCode.toString() ) {
				return;
			}
			opts.cheat(evt, opts);
		});
		return this;
	};
    
	$.fn.konami.defaults = {
		code : [38,38,40,40,37,39,37,39,66,65],
		eventName : 'konami',
		eventProperties : null,
		cheat: function(evt, opts) {
			$(evt.target).trigger(opts.eventName, [ opts.eventProperties ]);
		}
	};
    
})( jQuery );

function activateCheat(){
    alert( 'Cheat code activated!' );
    // DO SOMETHING HERE!
}

$( document ).ready( function(){
    
    changeRaceSlide();
    
    $( window ).konami({
  		code : [38,38,40,40,37,39,37,39,66,65], // up up down down left right left right
		cheat: function() {
            activateCheat();
		}
	});
});