/*****
    My own JS, because for some reason putting it into about.js 
    just made everything choke. (And I don't exactly have the 
    time to learn all of Node during a testing exercise.)
*****/

function testTrigger(){
    var raceIcons = $('ul.slider-buttons li');
    raceIcons.each( function(){
        $(this).on('click', function(){
            console.log("Click!");
        });
    });
}

function changeRaceSlide(){
    var raceIcons = $('ul.slider-buttons li');
    
    raceIcons.each( function(){
        var self = $(this);
        var slideName = self.find('img').attr('for');
        var thisSlide = $('slider-content .slide[name=' + slideName + ']');
        if( !( thisSlide.hasClass('active') ) && !( self.hasClass('active') ) ){
            thisSlide.addClass('active');
            self.addClass('active');
        }
    });
}