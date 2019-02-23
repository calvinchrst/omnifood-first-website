$(document).ready(function () {     // load jquery after the whole document is loaded
    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '5%'
    });
    
//    var waypoints = $('#handler-first').waypoint(function(direction) {
//      notify(this.element.id + ' hit 25% from top of window') 
//    }, {
//      offset: '25%'
//    })
    
    
});
